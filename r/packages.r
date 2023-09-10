# se instalan en consola de R
# con .libPaths() se ve las rutas de instalación
# se pueden guardar en carpeta personal en $HOME
# en carpeta personal

# paquete para graficos (prueba)
#install.packages("ggplot2")

# Para cargar paquete
library(ggplot2)

# c concatenar
x <- c(-1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8, 1)
y <- x^3
y

# grafico de dispercion (puntos)
#qplot(x, y)

# Histograma
x2 <- c(1, 2, 2, 3, 3)
qplot(x2, binwidth = 1)
