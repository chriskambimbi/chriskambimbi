const basePath = '/chriskambimbi'

export function getBasePath(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  return `${basePath}${path}`
}

export { basePath }
