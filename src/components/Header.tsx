import { profile } from '../content';

const navigation = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#home">
          Mohammad<span>Aziz.</span>
        </a>
        <nav aria-label="Main navigation">
          {navigation.map(({ label, id }) => (
            <a href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
        </nav>
        <a
          className="header-link"
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>
    </header>
  );
}
