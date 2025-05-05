import LinkButton from '../atoms/_common/LinkButton'
import LinkImage from '../atoms/_common/LinkImage'
import NavContainer from '../layout/NavContainer'

// navigation
const TopNavigation = () => {
  return (
    <header className="border-b">
      <NavContainer>
        <div className="mr-[24px]">
          <LinkImage
            src="/nextjsIcon.png"
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
      </NavContainer>
    </header>
  )
}

export default TopNavigation
