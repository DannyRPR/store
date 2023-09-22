import "./App.css";
import imgcpu from "./assets/xeon.jpg";
import imgcpu2 from "./assets/RYZEN-Y.png";
import imgcpu3 from "./assets/UNITEC-Y.png";
import imgcpu4 from "./assets/ws-y.png"
import Card from "./components/Card";


function App() {
const products = [
  {
    name: 'XEON UNITEC RGB',
    board: 'X79',
    almacenamiento:'Disco solido 500gb + disco mecanico 1 tera',
    memoria: '16 gb',
    grafica: 'Nvidea kuadro k620 2gb',
    cpu: 'Intel xeon cpu E5 2689',
    nucleos: 8,
    hilos: 16,
    fuente:' Thermaltake 500W  80plus bronce',
    image: imgcpu3,
    tipo: 'HOME OFFICE',
    description: ' de Diseño, Programación, Edición, Renderizado, trabajo de oficina, Desarrollo web'
  },
  {
    name: 'AMD RYZEN',
    board: 'GIGABYTE B450',
    almacenamiento:'NVME 1tera',
    memoria: '32gb DDR4 3200mhz',
    grafica: 'RX 5600xt Asus tuc gamer',
    cpu: 'RYZEN 5 3600X',
    nucleos: 6,
    hilos: 12,
    fuente:'semimodular 650w 80plus bronce',
    image: imgcpu2,
    tipo: 'GAMER',
    description: 'de Edicion, Diseño, Renderizado, compatible con el 98% de los juegos'
  },
  {
    name: 'INTEL XEON',
    board: 'X79',
    almacenamiento:'Disco solido 500gb + disco mecanico 1 tera',
    memoria: '16 gb',
    grafica: 'Radeon RX 580 8gb',
    cpu: 'Intel xeon cpu E5 2689',
    nucleos: 8,
    hilos: 16,
    fuente:'Thermaltake 500W  80plus bronce',
    image: imgcpu,
    tipo: 'GAMER',
    description: ' de Diseño, Gamer, Programación, Edición, Renderizado, trabajo de oficina, Desarrollo web'
  },
  {
    name: 'WORKSTATION HEWLETT-PACKARD Z440',
    board: 'HP Z440',
    almacenamiento:'PCI NVEM 500gb + disco mecanico 1 tera',
    memoria: '32 gb',
    grafica: 'Radeon RX 580 8gb',
    cpu: 'Intel xeon cpu E5 2690 v3',
    nucleos: 12,
    hilos: 24,
    fuente:'750w ',
    image: imgcpu4,
    tipo: 'GAMER',
    description:'Soporta trabajo de Diseño, Gamer, Programación, Edición, Renderizado, trabajo de oficina, Desarrollo web'
  }
]




  return (
    <>
   { /* 
    <div className="container">
      <p> Lorem ipsum dolor, sit amet consectetur ad commodi temporibus, eius illum porro dicta ipsum in. Ipsum alias nobis autem sunt assumenda accusantium corrupti vel eveniet quae consequuntur maiores consectetur, dolor, repellendus laborum impedit, et labore! Beatae illo eveniet necessitatibus ea. Dicta expedita nostrum vero nobis soluta modi cum eos cumque maiores maxime, assumenda doloribus, tempora tempore porro harum doloremque, quisquam quia nam. Omnis quia officiis consectetur a vero vitae repellendus asperiores debitis qui sed, dolor, cum enim, magnam nemo ipsum deserunt quidem obcaecati culpa ipsa sapiente velit provident sequi nulla quo. Veniam, error numquam explicabo tempore esse delectus amet ullam voluptas neque perferendis quam laborum quae expedita at dolore. Magnam provident eius, blanditiis esse ducimus ab iste illo tempore, at est corrupti. Ipsam in temporibus libero aspernatur tempora delectus dignissimos exercitationem sequi culpa dolorem voluptate animi iure neque consectetur voluptatibus nesciunt dolor ut maxime alias quas ratione, dolores ad sint? Assumenda nostrum maiores natus porro sunt possimus? Assumenda vitae doloribus aliquid odio fugiat, dignissimos qui soluta maxime corporis! </p>
    </div>
   */}
   <h3 className="title">STORE</h3>
   <div className="cards">
  <Card datos={products[0]}/>
  <Card datos={products[1]}/>
  <Card datos={products[2]}/>
  <Card datos={products[3]}/>
   </div>
  <div className="contacto">
  <h2>Ing. Danny Portilla R</h2>
  <span><b>Contacto:</b> 3185679541</span>
  </div>
  
    </>
  );
}

export default App;
