# BSale-Test
BSale Initial Evaluation

<hr>

## Backend
The Backend is a REST API which is connected to a MySQL database. It is implemented with django-rest, it offers as endpoints:
* /products/    :
    * All products, no filter
    * 12 products per page
    * Example of use: https://bs-backend.herokuapp.com/products/

* /list/        : 
    * 12 products per page
    * Regex search
    * Filter by category
    * Order by category id, name, price
    * Example of use: https://bs-backend.herokuapp.com/list/1/?page=1&search=&ordering=category_id

* /categories/
    *  All categories of products
    *  Example of use: https://bs-backend.herokuapp.com/categories/

* /groups/
    * Products grouped by category, no filter
    * 1 category per page 
    * Regex search in category_name field
    *  Example of use: https://bs-backend.herokuapp.com/groups/

#### Technologies Used
* Python 3.9
* Django-rest 

<hr>

## Frontend
The Frontend is mainly developed with vanilla JavaScript. This consumes the REST API, and displays on screen the list of products as a grid of Cards, in addition to controlling the pagination through a navbar also made with pure JS.
The queries are made with JQuery Ajax, and a basic error control is made, as well as a loading message.
It offers the user the ability to search for products through a modal form, and filter the products by category by means of a dropdown menu.

#### Technologies Used
* HTML
* CSS
* JQuery
* Bootstrap (reactstrap)

<hr>

### Running deployments
* https://bs-backend.herokuapp.com/ is the Django-rest server
* https://temp-frontend.herokuapp.com/ is the frontend app

<hr>

### Folder Structure

    ├── ...                             # django-rest files
            ├── store                   # Store API django-rest files
            ├── evaluation              # django-rest files
            ├── frontend                # Frontend files
            │   ├── js                  # JS Files
            │   ├── css
