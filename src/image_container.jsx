import Nav from "./Nav";
const newNav = { Nav };
console.log(newNav.Nav);
export const url = [
  {
    key: 1,
    cat: "Sweets",
    url: "https://images.unsplash.com/photo-1532117364815-720cd35ff6e3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    key: 2,
    cat: "Flowers",
    url: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    key: 3,
    cat: "Cozy",
    url: "https://images.unsplash.com/photo-1566993344141-f12191b834fd?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    key: 4,
    cat: "Imaginary",
    url: "https://images.unsplash.com/photo-1606219411833-8abd2f112b50?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    key: 5,
    cat: "Animals",
    url: "https://images.unsplash.com/photo-1596854307809-6e754c522f95?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    key: 6,
    cat: "Flowers",
    url: "https://images.unsplash.com/photo-1532211387405-12202cb81d7b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDF8fHxlbnwwfHx8fHw%3D",
  },
];

function ImageContainer(props) {
  return <img src={props.src} key={props.key}></img>;
}

export default ImageContainer;
