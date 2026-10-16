import { profile } from '../content';

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.fullName}
        </span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
