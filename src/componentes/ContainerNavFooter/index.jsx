import './styles.css';

function ContainerNavFooter(props){
return (
    <>
    <header>
      <div className='container-header-title-logo'>
        <h2>Squad Management Tool</h2>
      </div>
      <div className='container-header-usuario'>
        <h2>John Doe</h2>
        <div className='imagem-usuario'>
          <h3>JD</h3>
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