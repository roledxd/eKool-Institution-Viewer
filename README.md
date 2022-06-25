# eKool Institution Viewer
The provided script will let you view the **institution settings** and **data**, **employees** and their **personal information**.\
This method was developed while researching the **eKool's** source code.

## Instructions
1. Log into your account. *(being connected to an institution is not required)*
2. Open the browser console and execute the code from **raw.js**\
*Notice: There is also a formated version in **formatted.js** if you'd like to research this.*
3. Choosing an institution to view:
	* Navigate to the **sidebar** on the **left** and click the **blue (+) button**.\
	* Find an institution by using the **search input file** and click on it.\
	* Click the **browse school page** button.\
	*Notice: There is also an option to view institution by **GroupId** if you know it (accessible after opening the **custom menu**).*
    
4. Using the **custom menu**
	* Open it up by executing following script:
	```js
    eKSEV.show()
    ```
    * Open the institution inside the menu
		* You can use the **GroupId** by typing it in and clicking **Load**.
		* If you're now on a **instutiton page**, you should see a button called "**Use current (*Institution name*)**", click  on it.
	
	* If everything is done correctly, **the menu** must have displayed **three buttons**:
		* **Group Data** - Information about this institution, such as:
			* **EHIS ID** - Institution id in **Eesti Hariduse Infosüsteem** + link.
            * **School URL** - Insitution **webpage**.
            * **Timetable URL** - Institution **timetable link**.
            * **Created by** - Institution **creator**.
            * **Created at** - Institution **creation date**.
            * **Email** - Institution **email address**.
            * **Email (CR | MOD)** - Institution email **Creation**, **Modification** dates.
            * **Email Creator** - Institution email **Creator**.
            * **Email Modifier** - Institution email **Modifier**.
            * **Group Object** - Institution **JSON Object**.
		* **Employees** - Information about employees from this institution, such as:
			* **Username** - Username.
            * **userId** - User identificator.
            * **idCode** - User national ID Code + Country Code.
            * **Creation Date** - User creation date.
            * **Birthdate** - User birthday.
            * **Last IP** - Last login IP Address.
            * **Last Login** - Last login datetime.
            * **Gender** - User gender.
            * **Optlock** - eKool OptLock.
            * **Language Code** - Last used interface language.
            * **Actions** - **Print to console** or **View profile**. 
		* **Other**
			* *This menu is not ready yet.*




	
