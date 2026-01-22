import { FOOTER_LINKS } from "../constants/index.js";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          更多選購方式：尋找當地的{" "}
          <a className="text-blue-500 underline" href="#">
            Apple 直營店
          </a>{" "}
          或其他{" "}
          <a className="text-blue-500 underline" href="#">
            零售商
          </a>
          ，或致電{" "}
          <a className="text-blue-500 underline" href="#">
            0800-020-021
          </a>
          。
        </p>
        <img src="/logo.svg" alt="Apple logo" />
      </div>

      <hr />

      <div className="links">
        <p>Copyright © 2025 Apple Inc. 保留一切權利。</p>

        <ul>
          {FOOTER_LINKS.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
