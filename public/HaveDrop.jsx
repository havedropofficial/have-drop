export default function HaveDrop({size, color ="#fb2c36"}){

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 200 200" role="img" ariaLabelledby="t3 d3">
  <title id="t3">Have Drop monogram</title>
  <desc id="d3">Square badge with 'HD' monogram and a small drop accent.</desc>

  <rect  width="200" height="200" rx="28" ry="28" fill={color}/>
  <text x="50%" y="55%" textAnchor="middle" fontFamily="Verdana, Arial, sans-serif" fontSize="72" fontWeight="700" fill="#fff" dy=".2em">HD</text>
  <path d="M135 115c0-6-6-12-10-16-6-6-6-6-12 0-6 8-6 16 0 24 6 8 22 12 22 0 0-2-0.5-4-0.5-8z" fill="#fff" transform="scale(0.9) translate(12,0)"/>
</svg>

    )

}