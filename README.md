# Expresiones Matriciales: Calma, Estrés y Caos

**Autora:** Antonia Rojas Iriarte  
**Curso:** Pensamiento Computacional  
**Sección:** 03  


## 1. Información del Proyecto

**¿En qué consiste el proyecto?** Es un sistema visual dinámico, generativo e interactivo programado en p5.js que utiliza una estructura de grilla (30x30 celdas) para explorar la transformación formal y el comportamiento de elementos geométricos a través de la interactividad del usuario.

**¿Qué se ve en pantalla?** Se observa un lienzo oscuro de 600x600 píxeles ocupado por una cuadrícula densa de elementos geométricos que reaccionan de manera fluida, dejando una sutil estela de movimiento en el fondo debido a una opacidad acumulativa. El sistema muta de formas orgánicas a composiciones abstractas y angulares dependiendo del estado activo.

**¿Qué elementos visuales aparecen?** * **Figuras geométricas básicas:** Círculos (elipses), cuadrados (rectángulos) y triángulos.  
* **Paleta cromática dinámica:** Colores reactivos basados en el sistema RGB que transicionan continuamente según la posición del cursor.

**¿Qué inputs utiliza?** * **Input continuo (Mouse):** Utiliza las coordenadas de posición (`mouseX` y `mouseY`) para alterar la rotación, el color y calcular la distancia geométrica hacia cada celda.  
* **Input de teclado (Eventos discretos):** Las teclas numéricas `1`, `2` y `3` actúan como disparadores para conmutar los estados globales del sistema.

**¿Qué outputs genera?** * **Output visual dinámico y reactivo:** Modificaciones en tiempo real del tamaño, la rotación tridimensional aparente, el parpadeo lumínico de la saturación del color y la morfología estructural de los elementos gráficos en la pantalla.


## 2. Descripción Conceptual

**Idea central** El proyecto busca representar la transición psicológica y fisiológica de los estados de ánimo humanos mediante la abstracción geométrica. El sistema actúa como un espejo del pulso interactivo, donde la aproximación o el movimiento del usuario rompe la inercia del lienzo, transitando desde la armonía estructural hasta la dispersión total.

**Corriente o referente de diseño** El sistema dialoga directamente con el **Op Art** y el **Arte Cinético**. No busca imitar una estética estática, sino traducir su lógica computacional subyacente: el uso de estructuras repetitivas, ilusiones espaciales basadas en el contraste de color y figuras que simulan movimiento autónomo mediante la interacción activa del espectador (en este caso, mediada por el cursor).

**Referentes Visuales e Históricos** A continuación, se presentan los referentes que inspiraron la traducción de la lógica visual y espacial de este sistema computacional:

1. **Victor Vasarely (1906–1997) – Op Art** * **Relación con el proyecto:** Vasarely utilizaba grillas geométricas estrictas (estructuras matriciales) cargadas de rombos, círculos y cuadrados. A través del contraste de color y pequeñas deformaciones en el tamaño de las figuras, lograba que una superficie completamente plana pareciera generar volumen o moverse ante la mirada del espectador.  
   * **Traducción al código:** El estado de "Calma" e "Estrés" de este sketch toma la cuadrícula ordenada de Vasarely, pero reemplaza la deformación estática por una deformación dinámica y reactiva basada en la distancia matemática (`dist()`) del cursor del mouse.  

2. **Julio Le Parc (1928–Presente) – Arte Cinético y Sistemas de Modulación** * **Relación con el proyecto:** Este artista argentino basó gran parte de su obra en la creación de "sistemas" y reglas predefinidas. Utilizaba matrices de elementos idénticos que cambiaban sutilmente de ángulo, color o rotación para estudiar cómo la luz y el movimiento modificaban el espacio. Le Parc invitaba activamente al espectador a interactuar o alterar la obra.  
   * **Traducción al código:** La lógica modular del sketch (`dibujarCelda()`) emula el pensamiento sistemático de Le Parc. No se dibuja una imagen fija, sino un conjunto de reglas algorítmicas donde el ángulo de rotación (`rotate`) cambia de forma masiva según los impulsos continuos del usuario.  

3. **Vera Molnár (1924–2023) – Pionera del Arte Generativo y el "Orden vs. Caos"** * **Relación con el proyecto:** Molnár fue una de las primeras artistas en usar computadoras para hacer arte. Su método de trabajo consistía en crear estructuras geométricas extremadamente ordenadas (grillas) y luego introducir pequeños factores de aleatoriedad o perturbaciones matemáticas para ver cómo el orden se rompía hacia el caos.  
   * **Traducción al código:** El estado de "Caos" del proyecto rinde homenaje directo a los experimentos de Molnár. Al presionar la tecla 3, el sistema rompe la inercia geométrica y utiliza la variable de tiempo (`frameCount`) junto con variaciones aleatorias (`random()`) para inducir un estado de descontrol visual sobre una matriz que inicialmente era rígida. Además de revisar diversos tutoriales en YouTube y en p5.js.

**Principio de diseño explorado** * **Grilla y Estructura:** Uso de un sistema ordenado para generar un espacio compositivo modular.  
* **Ritmo y Variación:** Consiste en repetir un mismo módulo muchas veces para crear un patrón visual. Para que no sea una repetición aburrida, se usa una regla matemática que altera el tamaño de cada figura de forma individual dependiendo de la cercanía del cursor.  
* **Contraste y Dinamismo:** Relación de tensión visual entre el orden estricto de la grilla y la perturbación orgánica generada por el usuario.


## 3. Input/Output y Sistema

**Reglas que gobiernan el sistema** El programa opera bajo una arquitectura de "Máquina de Estados Globales" dirigida por una lógica modular (`dibujarCelda()`). El sistema recibe coordenadas continuas del ratón, calcula vectores de distancia matemática relativos al centro de cada celda individual y altera la escala de la figura mediante mapeos (`map()`). Una variación aleatoria (`random()`) perturba cíclicamente la saturación cromática para generar una vibración óptica continua.

**Explicación de los 3 estados:** 1. **Estado "Calma" (Tecla 1):** El lienzo se compone de círculos concéntricos estables. La rotación es pasiva y suave, respondiendo únicamente al desplazamiento horizontal del mouse. Transmite balance y fluidez.  
2. **Estado "Estrés" (Tecla 2):** Los círculos se transforman en rectángulos rígidos. El ángulo de rotación se vuelve dependiente de la cercanía del cursor (`distancia`), provocando un torbellino visual localizado que persigue al usuario de forma tensa.  
3. **Estado "Caos" (Tecla 3):** Las figuras mutan a triángulos con vértices duros. La rotación se independiza y se acelera mediante la variable de tiempo interno del programa (`frameCount`) rescatado de tutoriales de Arte Generativo / Op Art, provocando así un torbellino cinético ininterrumpido en todo el lienzo donde el mouse actúa como un foco de distorsión de tamaño.

**Explicación del sistema de interactividad** * **Datos de entrada:** Posición en tiempo real (`mouseX`, `mouseY`) y distancia calculada a cada módulo mediante la función matemática `dist()`.  
* **Procesamiento y transformación:** La distancia es normalizada a través de la función `map()`, convirtiendo distancias grandes en tamaños mínimos y cercanías extremas en dimensiones máximas (escala inversa). El teclado reasigna el valor de la variable estado.  
* **Respuesta visual:** Mutación instantánea de la geometría en pantalla y fluctuación de canales RGB en tiempo real.


## 4. Diagrama de Flujo

A continuación se anexa el flujo interactivo digitalizado del sistema:

<img src="S2 pensamiento computacional.png" width="550">


## 5. Links del Proyecto

* [Ver Sketch Pantalla Completa en p5.js](https://editor.p5js.org/antonia.rojas4/full/qV8dELDR_)
* [Ver y Editar Código en p5.js](https://editor.p5js.org/antonia.rojas4/sketches/qV8dELDR_)


## 6. Conclusión Final del Proyecto

**Expresiones Matriciales** concluye como un ejercicio de diseño generativo que logra vincular con éxito la rigidez de la programación algorítmica con la fluidez de las dinámicas psicológicas humanas (calma, estrés y caos). Al someter una grilla regular a transformaciones paramétricas basadas en la posición del usuario y variables de tiempo, la obra deja de ser una imagen estática para transformarse en un sistema vivo y reactivo. 

El uso riguroso de condicionales, bucles anidados, mapeos precisos e interrupciones por eventos de teclado demuestra el dominio de las estructuras lógicas fundamentales del curso. El resultado es un diálogo armonioso entre la tecnología computacional y los principios históricos del Arte Óptico y Cinético, abriendo la puerta a futuras exploraciones en el campo del diseño interactivo y la programación creativa.
