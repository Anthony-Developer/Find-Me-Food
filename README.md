# Project Overview


## Find Me Food!

**Project decription:** A place where users can find local food restaurants based off of their search criteria, or can find recipes on food they are interested in.

## API and Data Sample

- [Yelp API](https://www.yelp.com/developers/documentation/v3/get_started)
- [News API](https://newsapi.org/)
- [Edamam API](https://www.edamam.com/)

## API Snippet

```
{
    "businesses": [
        {
            "id": "b6jOwyX4iaagw8YjXqq1sA",
            "alias": "antonios-trattoria-bronx",
            "name": "Antonio's Trattoria",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/VnG_keQUb8r3ImEx4iInMw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/antonios-trattoria-bronx?adjust_creative=gD0adRxaecs0Re0jXrg1Pg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=gD0adRxaecs0Re0jXrg1Pg",
            "review_count": 771,
            "categories": [
                {
                    "alias": "italian",
                    "title": "Italian"
                },
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "desserts",
                    "title": "Desserts"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.854131,
                "longitude": -73.886601
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "2370 Belmont Ave",
                "address2": null,
                "address3": "",
                "city": "Bronx",
                "zip_code": "10458",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "2370 Belmont Ave",
                    "Bronx, NY 10458"
                ]
            },
            "phone": "+17187336630",
            "display_phone": "(718) 733-6630",
            "distance": 1297.6051908224783
        }
```

## Wireframes

![Initial Design](https://res.cloudinary.com/anthony-dev/image/upload/v1579879578/Screen_Shot_2020-01-24_at_10.25.48_AM_trrlxu.png)
[Link](https://wireframe.cc/xL1c5y)

### MVP

- Allow user to search for local food
- Display Business information  
- Dislpay reviews for business

#### Post-MVP

- Give the user and option to search for restaurants or get recipes to make at home 
- Implement a map feature to give users the location on a map of the businesses  
- Link a section to current food news 
- Allow users to save favorite restaurants

## React Component Hierarchy

![Component Hierarchy](https://res.cloudinary.com/anthony-dev/image/upload/v1579879323/Screen_Shot_2020-01-24_at_10.20.51_AM_c3m1bl.png)



## Components

Based on the initial logic defined in the previous section, try to breakdown the logic further into stateless/stateful components. 

| Component | Description |Type |
| --- | --- | --- |
| Header | The Header component will contain the search and nav compenents, passing up the results from the search box up to App.js. | Functional |
| Search | The Search component will contain the input field and submit button, passing up the results to App.js where the state of search will be placed. | Functional |
| Nav | The Nav component will contain dedicated links with the value of the search input. | Functional |
| Main | The Main component will house all my indivudial components that will render specific data to the page. | Functional |
| Results | The Results component will display the businesses being retrieved from the API based on the search. | Functional |
| Reviews | The Reviews component will display reviews on the selected busnisses. | Functional |
| News | The News component will current food news. | Functional |
| Maps | The Maps component will show users the selected businesses location on a map. | Functional |

## Priority Matrix

![Priority Matrix](https://res.cloudinary.com/anthony-dev/image/upload/v1579881665/Screen_Shot_2020-01-24_at_10.59.52_AM_dq21nq.png)

## Timeframes

Timeframes are key in the development cycle. You have limited time to code and so much to accomplish!  Look at all of your planned files and components, and all of the areas of development you are planning and give an estimate of how long each one will take to complete. It's always best to pad the time to account for the unknown, so be sure to add an additional hour or two to play it safe. As you progress, you can update the "Time Invested" column to keep track of your hours, but that number should turn into "Actual Time" by the presentation day. Also, put a winter-themed gif at the top of your readme before you pitch to show you read the instructions thoroughly.


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create The Structure | H | 3 hrs| 5 hrs | 0 hrs |
| Create the Logic and Initial State | H | 6 hrs| 7 hrs | 0 hrs |
| Interacting with APIs | H | 8 hrs| 6 hrs | 0 hrs |
| Get Components to Render Their Data | H | 6 hrs| 7.5 hrs | 0 hrs |
| Style the Page | H | 10 hrs| 5 hrs | 0 hrs |
| Setting Up the News Section | H | 6 hrs| 4 hrs | 0 hrs |
| Total | H | 39 hrs| 29 hrs | 0 hrs |

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Jan 24th| Project Pitch / Project Approval | Complete
|Jan 27th| Basic Structure with Working Logic and API Results | Complete
|Jan 28th| Get All Components To Render Their Specified Data | Complete
|Jan 29th| Styling the Site  | Incomplete
|Jan 30th| Final Touches | Incomplete
|Jan 31tst| Present | Incomplete

## Additional Libraries

Use this section to list all supporting libraries and thier role in the project. React Router Dom and Axios should be listed here at the very least.

- Axios
- Dotenv
- React-router-dom

## Issues and Resolutions

Use this section to list of all major issues you anticipate encountering during development and how you plan to tackle them. Be sure to update this section during development, documenting the actual resolutions you inacted, as well as any other unexpected obstacles you encountered along the way.

## Code Snippet

Use this section to include a brief code snippet you are proud of, along with a brief description of why.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made in your overall planning and the reasoning behind those changes.  
