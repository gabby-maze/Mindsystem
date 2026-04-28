export function canAccessSection(tier: string, courseId: string): boolean {
  if (
    tier === "courtside" ||
    tier === "independent" ||
    tier === "supported" ||
    tier === "innerCircle"
  )
    return true;
  if (tier === "free") return courseId === "video-game-library";
  return false;
}

export function canAccessLesson(
  tier: string,
  courseId: string,
  lessonIndex: number
): boolean {
  if (!canAccessSection(tier, courseId)) return false;
  if (tier === "free" && courseId === "video-game-library")
    return lessonIndex === 0;
  return true;
}
