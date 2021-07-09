import React from 'react'
import '../Components/styles/intro.css'
import segmento_clientes from '../images/intro/segmento-cliente.jpg'
import propuesta_valor from '../images/intro/propuesta-valor.jpg'
import relacion_cliente from '../images/intro/relacion-cliente.jpg'
import canales_dist from '../images/intro/canales-distribucion.jpg'
import fuentes_ingresos from '../images/intro/fuente-ingresos.jpg'
import actividades_clave from '../images/intro/actividades-clave.jpg'
import recursos_clave from '../images/intro/segmento-cliente.jpg'
import socios from '../images/intro/socios.jpg'
import costos from '../images/intro/costos.jpg'


class intro extends React.Component {
    render() {
        return <div className="main-info">

    <div class="tips">

    
      <section class="espacio-tips">
        <div class="row">
          <div class="col-md-7">
            <h2 class="titulos">1. Segmento de Clientes </h2>
            <p class="pt">También conocido como mercado meta, son las personas para las que creas tu producto o servicio. Una empresa puede tener distintos clientes dependiendo de los servicios o productos que ofrezca y las líneas de negocio. Incluso tu modelo de negocio puede variar con relación a estos. Asegúrate de definir el propósito y misión de tu empresa para generar una comunidad que se identifique con los valores de tu marca.
            </p>
            {}
          
          </div>
          <div class="col-md-5">
            <img src={segmento_clientes} alt=" Imagen de BMC" class="img_ejemplo "/>
          </div>
        </div>

      </section>

    
      <section>
        <div class="row">
          <div class="col-md-7">
            <h2 class="titulos">2. Propuesta de valor</h2>
            <p class="pt">Es lo que hace único y te distingue de otras empresas. Para definirla debes hacerte la pregunta de: ¿por qué el cliente va a comprar tu producto y no el de la competencia? 
              Se trata de tu ventaja competitiva que puede ser de costos, de servicio o diferencia de producto.
              </p>
         
          </div>
          <div class="col-md-5">
            <img src={propuesta_valor} alt=" Imagen de BMC" class="img_ejemplo espacio-img"/>
          </div>
        </div>

      </section>

   
        <section>
          <div class="row">
            <div class="col-md-7">
              <h2 class="titulos">3.
                Relación con clientes
                </h2>
              <p class="pt">Después de segmentar a tus clientes y conocer las actividades que hace y dónde se relaciona. Analiza cómo tendrás interacción con ellos. Reflexiona si tus clientes necesitan una relación personalizada, exclusiva, de autoservicio y automatizada. Asegúrate de destacar tu propuesta de valor en cada interacción.
                </p>
            
  
            </div>
            <div class="col-md-5">
              <img src={relacion_cliente} alt=" Imagen de BMC" class="img_ejemplo espacio-img"/>
            </div>
          </div>
  
        </section>

          
      <section>
        <div class="row">
          <div class="col-md-7">
            <h2 class="titulos">4. Canales de distribución</h2>
            <p class="pt">Los canales de distribución integran dos elementos. El primero es cómo darás a conocer tu producto o servicio: pueden ser estrategias de marketing tradicionales o digitales, según tu mercado meta. El segundo es cómo harás llegar tu producto o servicio y qué medios necesitas: envíos, entrega física, experiencias virtuales, entre otros.
              </p>
          

          </div>
          <div class="col-md-5">
            <img src={canales_dist} alt=" Imagen de BMC" class="img_ejemplo espacio-img"/>
          </div>
        </div>

      </section>

        <section>
          <div class="row">
            <div class="col-md-7">
              <h2 class="titulos">5. Fuente de ingresos</h2>
              <p class="pt">Define cuál es la manera en que generarán dinero. La más evidente es por medio de la venta de tu producto o servicio. Otras fuentes de ingresos menos evidentes es el aprovechamiento de tus conocimientos o recursos. Establece a qué precio venderás tu producto y cuánto están dispuestos a pagar tus clientes por él. La fuente de ingreso tiene que permitir que la empresa sea rentable </p>
           
  
            </div>
            <div class="col-md-5">
              <img src={fuentes_ingresos} alt=" Imagen de BMC" class="img_ejemplo espacio-img"/>
            </div>
          </div>
  
        </section>

      <section>
        <div class="row">
          <div class="col-md-7">
            <h2 class="titulos">6. Actividades clave</h2>
            <p class="pt">Se trata de las actividades fundamentales que necesitas hacer para tener tu producto o servicio. Desde el proceso de pre-producción, la producción o desarrollo de tu producto hasta la comercialización. Es importante que tengas claro el tiempo que te lleva cada etapa del proceso.

              </p>
          

          </div>
          <div class="col-md-5">
            <img src={actividades_clave}alt=" Imagen de BMC" class="img_ejemplo espacio-img"/>
          </div>
        </div>

      </section>


        <section>
          <div class="row">
            <div class="col-md-7">
              <h2 class="titulos">7. Recursos Claves</h2>
              <p class="pt">También conocidos como activos de la empresa que son los bienes, derechos y recursos de diferentes tipos: físicos, económicos y de capital humano. Analiza cuáles son los recursos indispensables para operar con base en tus actividades clave.
                </p>
       
            </div>
            <div class="col-md-5">
              <img src={recursos_clave} alt=" Imagen de BMC" class="img_ejemplo espacio-img"/>
            </div>
          </div>
  
        </section>

    
      <section>
        <div class="row">
          <div class="col-md-7">
            <h2 class="titulos">8. Socios clave</h2>
            <p class="pt">Alguno de los recursos que necesita la empresa son externos como proveedores y aliados estratégicos necesarios para la operación. Asegúrate de que estos compartan tu propuesta de valor. Estos son quienes ayudan a potenciar el crecimiento de tu negocio. Piensa bien en quiénes son y no olvides a ninguno.
              </p>
         

          </div>
          <div class="col-md-5">
            <img src={socios} alt=" Imagen de BMC" class="img_ejemplo espacio-img"/>
          </div>
        </div>

      </section>

        <section>
          <div class="row">
            <div class="col-md-7">
              <h2 class="titulos">9. Estructura de costos</h2>
              <p class="pt">Todos los recursos y actividades clave de tu empresa generarán gastos o inversiones que debes tener en cuenta para poner en marcha tu negocio. Existen costos fijos y variables. Los primeros se refieren a aquellos que la empresa debe pagar sin tomar en cuenta su nivel de operación, por ejemplo, renta de inmuebles, maquinaria, sueldos, servicios. Los variables se refieren a aquellos que cambian con base en la producción; por ejemplo, mantenimiento de maquinaria, insumos, empaques, personal operativo y transportación.
                </p>
           
  
            </div>
            <div class="col-md-5">
              <img src={costos} alt=" Imagen de BMC" class="img_ejemplo espacio-img"/>
            </div>
          </div>
  
        </section>

    </div>
    

            
        </div>
    }
}

export default intro;