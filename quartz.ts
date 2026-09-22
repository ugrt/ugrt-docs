import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

interface ExplorerNode {
  slugSegments?: string[]
  displayName?: string
  isFolder: boolean
}

// Manual explorer ordering. Each key is a parent folder slug ("__root__" for the
// top level) and its value lists child slug segments in the order they should
// appear. Children that are not listed fall back to folders-first, then
// alphabetical. Everything is intentionally self-contained so the function can be
// serialized to the client via `.toString()`.
const explorerSortFn = (a: ExplorerNode, b: ExplorerNode): number => {
  const boardOrder = [
    "home",
    "requirements",
    "inputs-outputs",
    "block-diagram",
    "bill-of-materials",
    "gallery",
  ]
  const order: Record<string, string[]> = {
    __root__: ["index", "electrical-folder-26-27", "resources", "archive", "contribution-guide"],
    "electrical-folder-26-27": [
      "home",
      "fan-board",
      "light-board",
      "steering-board",
      "power-distribution-board",
    ],
    "electrical-folder-26-27/fan-board": boardOrder,
    "electrical-folder-26-27/light-board": boardOrder,
    "electrical-folder-26-27/steering-board": boardOrder,
    "electrical-folder-26-27/power-distribution-board": boardOrder,
    resources: ["home", "electrical-resources", "firmware-resources", "general"],
  }

  const segmentsA = a.slugSegments ?? []
  const segmentsB = b.slugSegments ?? []
  const listA = order[segmentsA.slice(0, -1).join("/") || "__root__"]
  const listB = order[segmentsB.slice(0, -1).join("/") || "__root__"]
  if (listA !== undefined || listB !== undefined) {
    if (listA === undefined) return 1
    if (listB === undefined) return -1
    const indexA = listA.indexOf(segmentsA[segmentsA.length - 1] ?? "")
    const indexB = listB.indexOf(segmentsB[segmentsB.length - 1] ?? "")
    const rankA = indexA === -1 ? 1000 : indexA
    const rankB = indexB === -1 ? 1000 : indexB
    if (rankA !== rankB) return rankA - rankB
  }

  if (a.isFolder !== b.isFolder) return a.isFolder ? -1 : 1
  return (a.displayName ?? "").localeCompare(b.displayName ?? "", undefined, {
    numeric: true,
    sensitivity: "base",
  })
}

componentRegistry.setOptionOverrides("@quartz-community/explorer", { sortFn: explorerSortFn })

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
