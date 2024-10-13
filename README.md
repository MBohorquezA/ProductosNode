# Instrucciones para el proyecto ProductosNode

1. ejecutar este código en la consola de SqlServer apuntando a la BDProductos 

```bash
CREATE PROCEDURE dbo.DeleteProduct
    @Id INT
AS
BEGIN
    SET NOCOUNT ON;

    DELETE FROM Product
    WHERE Id = @Id;
END;
GO

CREATE PROCEDURE dbo.UpdateProduct
    @Id INT,
    @Name NVARCHAR(100),
    @Description NVARCHAR(255),
    @Price DECIMAL(18, 2),
    @Stock INT
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE Product
    SET Name = @Name,
        Description = @Description,
        Price = @Price,
        Stock = @Stock
    WHERE Id = @Id;
END;
GO
```
2. Verificar la linea de conexion en "config/dbconfig.js"

3. El proyecto tiene swagger entonces al ejecutar el comando "node app.js", se debe abrir el enlace "http://localhost:3000/api-docs"

4. Para correr los test ejecutar "npm test"

Nota: Crear la tabla manualmente si ya existe omitir:

```bash
CREATE TABLE Product (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Description NVARCHAR(255),
    Price DECIMAL(18, 2) NOT NULL,
    Stock INT NOT NULL
);
```


