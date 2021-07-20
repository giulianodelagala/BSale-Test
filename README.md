# BSale-Test
BSale Initial Evaluation

<hr>

### Backend
The Backend is a REST API which is connected to a MySQL database. It is implemented with django-rest, it offers as endpoints:
* /products/    : all the products list.
* /list/        : list of products under a regex filter search by field 'name', and paginated.

#### Technologies Used
* Python 3.9
* Django-rest 

<hr>

### Frontend
The Frontend is mainly developed with vanilla JavaScript. This consumes the REST API, and displays on screen the list of products as a grid of Cards, in addition to controlling the pagination through a navbar also made with pure JS.
The queries are made with JQuery Ajax, and a basic error control is made, as well as a loading message.
It also offers the user the ability to search for products through a modal form.

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
