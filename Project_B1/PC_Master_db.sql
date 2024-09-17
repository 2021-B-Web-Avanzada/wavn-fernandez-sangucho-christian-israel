-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema PC_Master
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema PC_Master
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `PC_Master` DEFAULT CHARACTER SET utf8mb4 ;
USE `PC_Master` ;

-- -----------------------------------------------------
-- Table `PC_Master`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PC_Master`.`Cliente` (
  `idCliente` INT NOT NULL AUTO_INCREMENT,
  `cedula` VARCHAR(45) NULL,
  `nombre_cliente` VARCHAR(100) NULL,
  `apellido_cliente` VARCHAR(100) NULL,
  `direccion_cliente` VARCHAR(100) NULL,
  `correo_cliente` VARCHAR(100) NULL,
  PRIMARY KEY (`idCliente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PC_Master`.`Tarjeta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PC_Master`.`Tarjeta` (
  `idTarjeta` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NULL,
  `anio` INT NULL,
  `mes` INT NULL,
  `Cliente_idCliente` INT NOT NULL,
  PRIMARY KEY (`idTarjeta`, `Cliente_idCliente`),
  INDEX `fk_Tarjeta_Cliente_idx` (`Cliente_idCliente` ASC) VISIBLE,
  CONSTRAINT `fk_Tarjeta_Cliente`
    FOREIGN KEY (`Cliente_idCliente`)
    REFERENCES `PC_Master`.`Cliente` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PC_Master`.`Proveedor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PC_Master`.`Proveedor` (
  `idProveedor` INT NOT NULL AUTO_INCREMENT,
  `ruc` VARCHAR(45) NULL,
  `nombre_proveedor` VARCHAR(100) NULL,
  `direccion_proveedor` VARCHAR(100) NULL,
  `telefono_proveedor` VARCHAR(45) NULL,
  PRIMARY KEY (`idProveedor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PC_Master`.`Categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PC_Master`.`Categoria` (
  `idCategoria` INT NOT NULL AUTO_INCREMENT,
  `nombre_categoria` VARCHAR(100) NULL,
  PRIMARY KEY (`idCategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PC_Master`.`Producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PC_Master`.`Producto` (
  `idProducto` INT NOT NULL AUTO_INCREMENT,
  `nombre_producto` VARCHAR(100) NULL,
  `categoria` VARCHAR(45) NULL,
  `precio_producto` DOUBLE NULL,
  `imagen_producto` VARCHAR(200) NULL,
  `descripcion` VARCHAR(200) NULL,
  `Proveedor_idProveedor` INT NOT NULL,
  `Categoria_idCategoria` INT NOT NULL,
  PRIMARY KEY (`idProducto`, `Proveedor_idProveedor`, `Categoria_idCategoria`),
  INDEX `fk_Producto_Proveedor1_idx` (`Proveedor_idProveedor` ASC) VISIBLE,
  INDEX `fk_Producto_Categoria1_idx` (`Categoria_idCategoria` ASC) VISIBLE,
  CONSTRAINT `fk_Producto_Proveedor1`
    FOREIGN KEY (`Proveedor_idProveedor`)
    REFERENCES `PC_Master`.`Proveedor` (`idProveedor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Producto_Categoria1`
    FOREIGN KEY (`Categoria_idCategoria`)
    REFERENCES `PC_Master`.`Categoria` (`idCategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PC_Master`.`Pedido_Cabecera`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PC_Master`.`Pedido_Cabecera` (
  `idPedido_Cabecera` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NULL,
  `Cliente_idCliente` INT NOT NULL,
  PRIMARY KEY (`idPedido_Cabecera`, `Cliente_idCliente`),
  INDEX `fk_Pedido_Cabecera_Cliente1_idx` (`Cliente_idCliente` ASC) VISIBLE,
  CONSTRAINT `fk_Pedido_Cabecera_Cliente1`
    FOREIGN KEY (`Cliente_idCliente`)
    REFERENCES `PC_Master`.`Cliente` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PC_Master`.`Pedido_Detalle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PC_Master`.`Pedido_Detalle` (
  `idPedido_Detalle` INT NOT NULL AUTO_INCREMENT,
  `cantidad` INT NULL,
  `precio_detalle` DOUBLE NULL,
  `Producto_idProducto` INT NOT NULL,
  `Pedido_Cabecera_idPedido_Cabecera` INT NOT NULL,
  PRIMARY KEY (`idPedido_Detalle`, `Producto_idProducto`, `Pedido_Cabecera_idPedido_Cabecera`),
  INDEX `fk_Pedido_Detalle_Producto1_idx` (`Producto_idProducto` ASC) VISIBLE,
  INDEX `fk_Pedido_Detalle_Pedido_Cabecera1_idx` (`Pedido_Cabecera_idPedido_Cabecera` ASC) VISIBLE,
  CONSTRAINT `fk_Pedido_Detalle_Producto1`
    FOREIGN KEY (`Producto_idProducto`)
    REFERENCES `PC_Master`.`Producto` (`idProducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Pedido_Detalle_Pedido_Cabecera1`
    FOREIGN KEY (`Pedido_Cabecera_idPedido_Cabecera`)
    REFERENCES `PC_Master`.`Pedido_Cabecera` (`idPedido_Cabecera`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
