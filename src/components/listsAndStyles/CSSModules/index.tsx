import React from 'react'
import styles from './styles.module.css'

// O CSS Modules é a mesma pegada do stylesheet, porém, ao chama-lo no className com styles.NomeDaClasse, isso faz
// com que o nome dessa classe seja única, pois ela acaba ganhando caracteres aleatórios, com isso o risco de conflitos
// por classes iguais acaba deixando de ocorrer.
const CSSModules = () => {
  return (
    <div className={styles.container}>
      <h3>CSS Modules</h3>
      <button className={styles.btn}>
        CSS Modules
      </button>
    </div>
  )
}

export default CSSModules