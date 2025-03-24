import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        // from data-repo
        repo: 'filmnt/study',
        // from data-repo-id
        repoId: 'R_kgDOONokFA',
        // from data-category
        category: 'Comments',
        // from data-category-id
        categoryId: 'DIC_kwDOONokFM4CoZfp',
        lightTheme: "light_protanopia", // corresponds to light-theme.css in quartz/static/giscus/
        darkTheme: "dark_protanopia", // corresponds to dark-theme.css quartz/static/giscus/
      }
    }),
  ],
  footer: Component.Footer({
    links: {
      "Comments": "https://filmnt.github.io/share/7",
      "Twitch": "https://filmnt.github.io/share/6",
      "Discord": "https://filmnt.github.io/share/3",
      GitHub: "https://filmnt.github.io/share/4",
      "Setting": "https://filmnt.github.io/"

    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    ],
    
    left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.DesktopOnly(Component.Search()),
    Component.Darkmode(),    
    Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(Component.RecentNotes({ limit: 4, showTags:false })),

    ],
    
    right: [
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.TableOfContents()),
    ],
    }

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [    Component.Breadcrumbs(),Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    ],
  right: [


  ],
}
