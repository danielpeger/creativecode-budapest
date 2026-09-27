const LEGACY_NAMED_TRANSFORMATION = "upload/t_breakthumbnails/"

export function withCloudinaryTransforms(src, transformations) {
  if (!src || !transformations) return src || ""

  const transformed = `upload/${transformations}/`
  if (src.includes(LEGACY_NAMED_TRANSFORMATION)) {
    return src.replace(LEGACY_NAMED_TRANSFORMATION, transformed)
  }
  return src.replace("upload/", transformed)
}
