export default function Minimize({ rotate, color }) {
  return (
    <svg
      style={{
        transform: rotate ? "rotate(180deg)" : "rotate(0deg)",
        transitionDuration: "500ms",
      }}
      width="18"
      height="40"
      viewBox="0 0 25 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.2186 4.03861L1.35042 21.6145L1.73377 17.576C10.079 21.2196 18.3062 27.4797 24.3808 36.0702C25.0664 37.0379 24.0859 40.8888 23.2013 39.8125C19.9576 35.8629 16.618 32.1699 12.8656 29.0991C9.11323 26.0282 5.0807 23.5893 0.900724 21.7626C-0.146112 21.3084 0.620585 18.2376 1.28407 17.7241L24.1523 0.148215C25.4203 -0.829321 25.1106 3.3573 24.2186 4.03861Z"
        fill={color}
      />
    </svg>
  );
}
