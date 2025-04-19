import Groq from "groq-sdk";
import { Exercise, ApiResponse } from "../types";

// Get API key from environment variables
const apiKey = import.meta.env.VITE_GROQ_API_KEY;

// Initialize Groq with browser compatibility flag
const groq = new Groq({ 
  apiKey,
  dangerouslyAllowBrowser: true 
});

export async function getExercisesForEquipment(base64Image: string): Promise<{ equipment: string; exercises: Exercise[] }> {
  try {
    // Check if API key is available
    if (!apiKey) {
      throw new Error("Groq API key is not configured. Please check your environment variables.");
    }

    const prompt = `
      I'm showing you an image of gym equipment. Please identify the equipment and suggest 5 exercises that can be performed with it.
      For each exercise, provide:
      1. Exercise name
      2. Brief description of how to perform it
      3. Target muscles it works
      
      Format your response as JSON with the following structure:
      {
        "equipment": "name of the equipment",
        "exercises": [
          {
            "name": "Exercise name",
            "description": "Brief exercise description",
            "targetMuscles": ["Primary muscle", "Secondary muscle"]
          }
        ]
      }
      
      Only provide the JSON object without any additional text.
    `;

    const completion = await groq.chat.completions.create({
      model: "meta-llama/llama-4-scout-17b-16e-instruct",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            { type: "image_url", image_url: { url: base64Image } }
          ]
        }
      ],
    });

    const responseContent = completion.choices[0]?.message?.content || "";
    
    // Extract JSON from the response
    const jsonMatch = responseContent.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("Failed to extract JSON from the response");
    }
    
    const responseData = JSON.parse(jsonMatch[0]) as ApiResponse;
    
    // Transform the exercises to include YouTube search queries
    const exercisesWithYouTube = responseData.exercises.map(exercise => ({
      ...exercise,
      youtubeSearchQuery: `${exercise.name} ${responseData.equipment} tutorial`
    }));

    return {
      equipment: responseData.equipment,
      exercises: exercisesWithYouTube
    };
  } catch (error) {
    console.error("Error calling Groq API:", error);
    throw error;
  }
}