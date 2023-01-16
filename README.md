# Fetching data from Graph API using Apollo Client exercise

# Prerequsites

For creating the project I use Vite and then I installed all the dependecies needed.

1. Connecting the app to Graph API

I've connected the Graph API using Apollo client (I read the documentation)

2. Fetching the posts data

Using query I fetch all the posts data in a file called graph.js and then I exported in order to used in the main app component.

3. Calculating the number of posts per month

For this I've made an function that parse the dates from the API and store them into an array.

And then I've made another function that maps through all the dates and calculate the number of posts per month.

4. VISX histogram

That was the dificult part of the exercise, I had to figure it out how VISX work by reading the documentation and watching yt videos.

After getting the number of posts in an object, I store the x and y values as follwing -> x for name and y for number of posts.

I made the scalex and scaley of the the graph with all the setting for range, domain, etc

Thanks for Reading!
