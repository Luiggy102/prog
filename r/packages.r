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
y <- x^2

# grafico de dispercion (puntos)
qplot(x, y)

# Histograma
x2 <- c(1, 2, 2, 2, 3, 3)
qplot(x2, binwidth = 1)

x3 <- c(1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4)
qplot(x3, binwidth = 1)

x4 <- c(0, 1, 1, 2, 2, 2, 3, 3, 4)
qplot(x4, binwidth = 1)

roll <- function() {
  die <- 1:6
  dice <- sample(die, 2, TRUE)
  sum(dice)
}

# pon el 2 tres veces
replicate(3, 1 + 1)
#roll()
# 10 sumas de nums aleatorias del 1 al 6 que pueden repetirse
replicate(10, roll())

# con 10000 se da uno cuenta q 7 ocurre más q otro número
rolls <- replicate(10000, roll())
qplot(rolls, binwidth = 1)
