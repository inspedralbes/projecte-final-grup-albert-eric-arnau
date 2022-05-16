# USER

---

<details>
  <summary>
    <span class="badge post">POST</span> <code>/user/register</code> 
  </summary>
  <br />

**Description**
Crear usuarios a la base de datos de firstore.

**Parameter type**
`body`

**Parameter content type**
`application/json`

**Data Type**

```yaml
{
  "userID": "Radsl532F3fsdD1IK",
  "email": "admin@gmail.com",
  "name": "@admin",
  "username": "admin",
  "color": "#309ebf",
}
```

**RESPONSE:**
<span class="response success">202</span> Success:

```yaml
{ "status": 202, "message": "Se ha creado el usuario correctamente" }
```

<span class="response error">404</span> Not found:

```yaml
{ "status": 404, "message": "No se ha podido crear el usuario" }
```

</details>

---

<details>
  <summary>
    <span class="badge get">GET</span> <code>/user/{userID}</code> 
  </summary>
  <br />  
  
**Description**
Devuelve la información de un usuario a partir de un `userID`

**Parameter type**
`query`

**Parameter content type**
`application/json`

**Data Type**

`/user/Radsl532F3fsdD1IK`

**RESPONSE:**
<span class="response success">202</span> Success:

```yaml
{
  "userID": "Radsl532F3fsdD1IK",
  "email": "admin@gmail.com",
  "name": "@admin",
  "username": "admin",
  "color": "#309ebf",
}
```

<span class="response error">404</span> Not found:

```yaml
{ "status": 404, "message": "No se ha podido encontrar el usuario" }
```

</details>

---

<style>
.response{
  border-radius:3px;
  color:white;
  font-weight:400;
  padding: 3px 30px;
}

.badge{
  border-radius:30px;
  color:white;
  font-weight:600;
  padding: 5px 10px;
}

.get{
  background-color:#309ebf;
}
.post{
  background-color:#30bf7a;
}

.success{
  background-color: #027d27;
}
.error{
  background-color: #bd0019;
}
summary{
 cursor: pointer
}
</style>
