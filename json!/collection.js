// Function to render your items
const renderTime = (mediumcol) => {
	const smallList = document.getElementById('mediumcol')

	mediumcol.forEach(itemTwo => {
		const listItemTwo = document.createElement('li') // Make the `li`

		// You can make each element inside of that…
		const itemTitleTwo = document.createElement('h2') // Make an `h2`
		itemTitleTwo.innerHTML = itemTwo.title // Put the JSON title inside
		listItemTwo.appendChild(itemTitleTwo) // And add it to the `li`!

		const itemImageTwo = document.createElement('iframe') // And an image
		itemImageTwo.src = itemTwo.frame // Set the `src` attribute from the JSON
		listItemTwo.appendChild(itemImageTwo) // And add that too


		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
				<p>Distance from guess: <br><time>${itemTwo.miles}</time> <em>From Location</em></p>
				<p>Points: <em>${itemTwo.points} / 5000</em></p>
				<a href="${itemTwo.link}">
					<p>${itemTwo.number} / 5 →</p>
				</a>
			`
		listItemTwo.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		// You can build logic from your data, too
		if (!itemTwo.fullPoints) { // If this is `false`
			listItemTwo.classList.add('faded') // Add this class to the whole `li`
			//easyList.appendChild(listItem) // Then add the whole `li` into the `ul`
		}

		smallList.appendChild(listItemTwo) // Then add the whole `li` into the `ul`
		//if (item.category == "small") { // If this is `false`
			// listItem.classList.add('faded') // Add this class to the whole `li`
			//easyList.appendChild(listItem) // Then add the whole `li` into the `ul`
		//}

	})
}

const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')
	//const smallList = document.getElementById('collection')
	//const mediumList = document.getElementById('mediumcol')
	//const collectionList = document.getElementById('largecol')


	// Loop through each item in the collection array
	collection.forEach(item => {
		const listItem = document.createElement('li') // Make the `li`

		// You can make each element inside of that…
		const itemTitle = document.createElement('h2') // Make an `h2`
		itemTitle.innerHTML = item.title // Put the JSON title inside
		listItem.appendChild(itemTitle) // And add it to the `li`!

		const itemImage = document.createElement('iframe') // And an image
		itemImage.src = item.frame // Set the `src` attribute from the JSON
		listItem.appendChild(itemImage) // And add that too


		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
				<p>Distance from guess: <br><time>${item.miles}</time> <em>From Location</em></p>
				<p>Points: <em>${item.points} / 5000</em></p>
				<a href="${item.link}">
					<p>${item.number} / 5 →</p>
				</a>
			`
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		// You can build logic from your data, too
		if (!item.fullPoints) { // If this is `false`
			listItem.classList.add('faded') // Add this class to the whole `li`
			//easyList.appendChild(listItem) // Then add the whole `li` into the `ul`
		}

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
		//if (item.category == "small") { // If this is `false`
			// listItem.classList.add('faded') // Add this class to the whole `li`
			//easyList.appendChild(listItem) // Then add the whole `li` into the `ul`
		//}

	})
}

const renderItemsThree = (largecol) => {
	const largeList = document.getElementById('largecol')

	largecol.forEach(itemThree => {
		const listItemThree = document.createElement('li') // Make the `li`

		// You can make each element inside of that…
		const itemTitleThree = document.createElement('h2') // Make an `h2`
		itemTitleThree.innerHTML = itemThree.title // Put the JSON title inside
		listItemThree.appendChild(itemTitleThree) // And add it to the `li`!

		const itemImageThree = document.createElement('iframe') // And an image
		itemImageThree.src = itemThree.frame // Set the `src` attribute from the JSON
		listItemThree.appendChild(itemImageThree) // And add that too


		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
				<p>Distance from guess: <br><time>${itemThree.miles}</time> <em>From Location</em></p>
				<p>Points: <em>${itemThree.points} / 5000</em></p>
				<a href="${itemThree.link}">
					<p>${itemThree.number} / 5 →</p>
				</a>
			`
		listItemThree.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		// You can build logic from your data, too
		if (!itemThree.fullPoints) { // If this is `false`
			listItemThree.classList.add('faded') // Add this class to the whole `li`
			//easyList.appendChild(listItem) // Then add the whole `li` into the `ul`
		}

		largeList.appendChild(listItemThree) // Then add the whole `li` into the `ul`
		//if (item.category == "small") { // If this is `false`
			// listItem.classList.add('faded') // Add this class to the whole `li`
			//easyList.appendChild(listItem) // Then add the whole `li` into the `ul`
		//}

	})
}



// Fetch gets your JSON file…
fetch('collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection) 
	});

fetch('collectiontwo.json')
	.then(response => response.json())
	.then(mediumcol => {
		// And passes the data to the function, above!
		renderTime(mediumcol)
	});

fetch('collectionthree.json')
	.then(response => response.json())
	.then(largecol => {
		// And passes the data to the function, above!
		renderItemsThree(largecol)
	});


	function myFunction() {
		var x = collection;
		var y = document.getElementById('collectionOne');
		if (x.style.display === "none") {
		  x.style.display = "grid";
		  y.style.display = "none";
		  
		} else {
		  x.style.display = "none";
		  y.style.display = "grid";
		}
	  };

	  function myFunctionTwo() {
		var x = document.getElementById("mediumcol");
		var z = document.getElementById('collectionTwo');
		if (x.style.display === "none") {
		  x.style.display = "grid";
		  z.style.display = "none";
		} else {
		  x.style.display = "none";
		  z.style.display = "grid";
		}
	  }

	  function myFunctionThree() {
		var x = document.getElementById("largecol");
		var z = document.getElementById('collectionThree');
		if (x.style.display === "none") {
		  x.style.display = "grid";
		  z.style.display = "none";
		} else {
		  x.style.display = "none";
		  z.style.display = "grid";
		}
	  }
