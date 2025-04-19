import NavContainder from "../layout/NavContainer"
import LinkButton from "../atoms/LinkButton"
import LinkImage from "../atoms/LinkImage"

const TopNavigation = () => {
  return (
    <header className="border-b">
      <NavContainder>
        <div className="mr-[24px]">
          <LinkImage
            image="/nextjsIcon.png"
            imgWidth={32}
            imgHeight={32}
            link="/"
          />
        </div>
        <nav className="grid grid-flow-col auto-cols-max gap-4">
          <LinkButton link="/youtubePreview" text="▶Youtube" />
          <LinkButton link="/" text="▶test1" />
          <LinkButton link="/" text="▶test2" />
        </nav>
      </NavContainder>
    </header>
  )
}

export default TopNavigation
