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

#### How to install/run
1. Clone Backend branch
```
git clone -b BackEnd https://github.com/giulianodelagala/BSale-Test/
cd BSale-Test
```
2. [Optional Recomended] Create and activate a new Python environment
3. Install all python dependencies (If you receive errors related with psycopg2, replace with psycopg2-binary in requirements.txt)
```
pip install -r requirements.txt
```
5. Execute server 
`python manage.py runserver`
6. By default the server will be accesible in http://localhost:8000

<hr>

## Frontend
The Frontend is mainly developed with vanilla JavaScript. This consumes the Backend REST API, and displays on screen the list of products as a grid of Cards, in addition to controlling the pagination through a navbar also made with pure JS.
The queries are made with JQuery Ajax, and a basic error control is made, as well as a loading message.
It offers the user the ability to search for products through a text input form, filter the products by category by means of a dropdown menu in the navbar, and order the results by category, by product name in ascending (A-Z) y descending (Z-A) order, by price (Lower or Higher price first); via a dropdown menu.

#### Technologies Used
* HTML
* CSS
* JQuery
* Bootstrap

<hr>

#### How to install/run
1. Clone Frontend branch
```
git clone -b Frontend https://github.com/giulianodelagala/BSale-Test/
cd BSale-Test
```
2. Install node modules
```
npm install
```
3. Execute server 
`npm start`
4. Enjoy!
* Additional setup for local deployment
   * Delete bs-config.js
   * Change baseURL variable in /js/scripts.js according to Backend service. Example:
> const baseURL = "http://localhost:8000/";
<hr>

## Running deployments
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
