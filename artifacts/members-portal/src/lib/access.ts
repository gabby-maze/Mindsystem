export function canAccessSection(tier: string, courseId: string): boolean {
  // MindSystem tile - independent, supported, inner-circle only (camelCase in app)
  if (courseId === "mindsystem") {
    return tier === "independent" || tier === "supported" || tier === "innerCircle";
  }
  // All paid tiers can access all other Courtside sections
  if (tier === "courtside" || tier === "independent" || tier === "supported" || tier === "innerCircle") {
    return true;
  }
  // Free tier - video-game-library and nutrition-library (guide tab only; recipes gated in NutritionPage)
  if (tier === "free") return courseId === "video-game-library" || courseId === "nutrition-library";
  return false;
}

export function canAccessLesson(
  tier: string,
  courseId: string,
  lessonIndex: number
): boolean {
  if (!canAccessSection(tier, courseId)) return false;
  // Free tier on video-game-library - first lesson only
  if (tier === "free" && courseId === "video-game-library") return lessonIndex === 0;
  return true;
}

// VGL lesson access: free lessons open to all; locked lessons require courtside+
export function canAccessVGLLesson(
  tier: string,
  lesson: { free?: boolean }
): boolean {
  if (lesson.free) return true;
  return tier === "courtside" || tier === "independent" || tier === "supported" || tier === "innerCircle";
}
