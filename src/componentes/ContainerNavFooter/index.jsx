import './styles.css';

function ContainerNavFooter(props){
return (
    <>
    <header>
      <div className='container-header-title-logo'>
        <h1>Squad Management Tool</h1>
      </div>
      <div className='container-header-usuario'>
        <h2>John Doe</h2>
        <div className='imagem-usuario'>
          <h2>JD</h2>
        </div>
      </div>
    </header>
    {props.children}
    <footer>
      2020 - All rights reserved
      </footer>
    </>
)
}

export default ContainerNavFooter;