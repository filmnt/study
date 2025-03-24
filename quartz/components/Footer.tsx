import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a target="_blank" href="https://obsidian.md/download">Obsidian</a>• 
          <a target="_blank" href="https://code.visualstudio.com/download">VS Code</a>•  
          <a target="_blank" href="https://grok.com/">Grok</a>•  
          <a target="_blank" href="https://quartz.jzhao.xyz/">Quartz</a>
           <span> for </span> <a target="_blank" href="https://www.mozilla.org/firefox/">Firefox</a>  © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a target="_blank" href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
