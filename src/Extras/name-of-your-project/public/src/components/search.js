function myFunction() {
    import { LightModeContext } from './context/LightModeContext';
    import { DarkModeContext } from './context/DarkModeContext';
    var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  const lightTheme = () => {
    const { lightMode, toggleLightMode } = useContext(LightModeContext);
  
    return (
      <div>
        <h1>{lightMode ? 'light Mode' : 'Light Mode'}</h1>
        <button onClick={toggleLightMode}>Toggle Theme</button>
      </div>
    );
  };
  
  const darkTheme = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  
    return (
      <div>
        <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
        <button onClick={toggleDarkMode}>Toggle Theme</button>
      </div>
    );
  };
  
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}
export default {lightTheme, darkTheme};