# F1 Stats

NodeJS implementation to get a historical record of F1 data from [Ergast Developer API](http://ergast.com/mrd/).

#### Install
`npm install f1-stats`

#### Use example
```
const f1s = require("f1-stats");

f1s("2008 drivers", (res) => {
    console.log(res);
});
```

#### Overview

All API requests have to follow this estructure:

`"<season> <round>"`

Where:

`<season>` is a 4 digit integer

`<round>` is a 1 or 2 digit integer

For example:

`"2008 12"` Would return stats about 2008's Valencia GP.

For requests concerning the whole season, or final standings, the round can be omitted:

`"2008"`

You can also get a general F1 request by omitting both `<round>` and `<season>`:
`""`

To specify the current season the `<season>` field may be set to "current". To specify the previous or next race within a season the `round` field may be set to "last" or "next" respectively. For example:

`"2005 last"` Returns stats about the last race of 2005.

`"current next"` Returns stats about current season's next race.

#### Season List

To get a list of the current supported seasons use:

`"seasons"`

Season lists can be refined by adding one or more of the following criteria:

`"circuits <circuitId>"`

`"constructors <constructorId>"`

`"drivers <driverId>"`

`"grid <position>"`

`"results <position>"`

`"fastest <rank>"`

`"status <statusId>"`

For example, to list all seasons where a specific driver has driven for a particular constructor:

`"drivers alonso constructors renault seasons"`

Alternatively, to list the seasons where a specific driver or constructor has achieved a particular final position in the championship:

`"drivers alonso driverStandings 1 seasons"`

`"constructors renault constructorStandings 1 seasons"`

##### JSON Example Response
```
{
"MRData": {
    "xmlns": "http:\/\/ergast.com\/mrd\/1.0",
    "series": "f1",
    "limit": "30",
    "offset": "0",
    "total": "5",
    "SeasonTable": {
      "constructorId": "renault",
      "driverId": "alonso",
      "Seasons": [
        {"season": "2003", "url": "http:\/\/en.wikipedia.org\/wiki\/F1_2003"},
        {"season": "2004", "url": "http:\/\/en.wikipedia.org\/wiki\/F1_2004"},
        {"season": "2005", "url": "http:\/\/en.wikipedia.org\/wiki\/F1_2005"},
        {"season": "2006", "url": "http:\/\/en.wikipedia.org\/wiki\/F1_2006"},
        {"season": "2008", "url": "http:\/\/en.wikipedia.org\/wiki\/F1_2008"}
      ]
    }
  }
}
```

#### Qualifying Results

**Note:** Qualifying results are only fully supported from the 2003 season onwards.

To list the qualifying results for a specific race use the following URL with the required year and round number:

`"2008 5 qualifying"`

If the qualifying results for the specified race are not available the RaceTable element in the response will be empty.

Qualifying results can be filtered using one or more of the following criteria:

`"circuits <circuitId>"`

`"constructors <constructorId>"`

`"drivers <driverId>"`

`"grid <position>"`

`"results <position>"`

`"fastest <rank>"`

`"status <statusId>"`

For example, to list all the qualifying results for a specific driver in a particular season:

`"2008 drivers alonso qualifying"`

Or to list all the qualifying results for a specific driver when driving for a particular constructor:

'"drivers alonso constructors renault qualifying"`

If you are only interested in qualifying results with a specific finishing position you can add a qualifier:

`"2008 qualifying 1"`

##### JSON Example Response

```
{
 "MRData": {
    "xmlns": "http://ergast.com/mrd/1.0",
    "series": "f1",
    "limit": "30",
    "offset": "0",
    "total": "22",
    "RaceTable": {
      "season": "2008",
      "round": "1",
      "Races": [
        {
          "season": "2008",
          "round": "1",
          "url": "http://en.wikipedia.org/wiki/2008_Australian_Grand_Prix",
          "raceName": "Australian Grand Prix",
          "Circuit": {
            "circuitId": "albert_park",
            "url": "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            "circuitName": "Albert Park Grand Prix Circuit",
            "Location": {
              "lat": "-37.8497",
              "long": "144.968",
              "locality": "Melbourne",
              "country": "Australia"
            }
          },
          "date": "2008-03-16",
          "time": "04:30:00Z",
          "QualifyingResults": [
            {
              "number": "22",
              "position": "1",
              "Driver": {
                "driverId": "hamilton",
                "permanentNumber": "44",
                "code": "HAM",
                "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
                "givenName": "Lewis",
                "familyName": "Hamilton",
                "dateOfBirth": "1985-01-07",
                "nationality": "British"
              },
              "Constructor": {
                "constructorId": "mclaren",
                "url": "http://en.wikipedia.org/wiki/McLaren",
                "name": "McLaren",
                "nationality": "British"
              },
              "Q1": "1:26.572",
              "Q2": "1:25.187",
              "Q3": "1:26.714"
            },
            .
            .
            .
          ]
        }
      ]
    }
  }
}
```

#### Constructor Information

To obtain a list of all constructors within a series, year or round use the following URLs:

`"constructors"`
`"2010 constructors"`
`"2010 2 constructors"`

Each constructor listed in the response is identified by a unique constructorId which is used to identify the constructor throughout the API. To obtain information about a particular constructor append the constructorId e.g:

`"constructors mclaren"`

Constructor lists can be refined by adding one or more of the following criteria:

`"circuits <circuitId>"`

`"constructors <constructorId>"`

`"drivers <driverId>"`

`"grid <position>"`

`"results <position>"`

`"fastest <rank>"`

`"status <statusId>"`

For example, to list all constructors a specific driver has driven for at a particular circuit:

`"drivers alonso circuits monza constructors"`

Alternatively, to list all the constructors who have achieved a particular final position in the championship:

`"constructorStandings/1/constructors"`

##### JSON Example Response

```
{
"MRData": {
    "xmlns": "http://ergast.com/mrd/1.0",
    "series": "f1",
    "limit": "30",
    "offset": "0",
    "total": "3",
    "ConstructorTable": {
      "circuitId": "monza",
      "driverId": "alonso",
      "Constructors": [
        {
          "constructorId": "mclaren",
          "url": "http://en.wikipedia.org/wiki/McLaren",
          "name": "McLaren",
          "nationality": "British"
        },
        {
          "constructorId": "minardi",
          "url": "http://en.wikipedia.org/wiki/Minardi",
          "name": "Minardi",
          "nationality": "Italian"
        },
        {
          "constructorId": "renault",
          "url": "http://en.wikipedia.org/wiki/Renault_F1",
          "name": "Renault",
          "nationality": "French"
        }
      ]
    }
  }
}
```

#### Lap Times

Lap time data is available from the 1996 season onwards. Lap time queries require a season and a round to be specified. To request all the lap times for a race use the following URL with the required year and round number:

`"2011 5 laps"`

If the lap times for the specified race are not yet available the RaceTable element in the response will be empty. To request the information for a specific lap add the lap number:

`"2011 5 laps 1"`

Lap timing queries can also include the following criteria:

`" drivers <driverId>`"

For example, to list all the lap timing data for a specific driver and lap:

`"2011 5 drivers alonso laps 1"`

##### JSON Example Response

```
{
"MRData": {
    "xmlns": "http://ergast.com/mrd/1.0",
    "series": "f1",
    "limit": "30",
    "offset": "0",
    "total": "22",
    "RaceTable": {
      "season": "2008",
      "round": "1",
      "Races": [
        {
          "season": "2008",
          "round": "1",
          "url": "http://en.wikipedia.org/wiki/2008_Australian_Grand_Prix",
          "raceName": "Australian Grand Prix",
          "Circuit": {
            "circuitId": "albert_park",
            "url": "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            "circuitName": "Albert Park Grand Prix Circuit",
            "Location": {
              "lat": "-37.8497",
              "long": "144.968",
              "locality": "Melbourne",
              "country": "Australia"
            }
          },
          "date": "2008-03-16",
          "time": "04:30:00Z",
          "Laps": [
            {
              "number": "1",
              "Timings": [
                {
                  "driverId": "hamilton",
                  "position": "1",
                  "time": "1:42.678"
                },
                {
                  "driverId": "alonso",
                  "position": "2",
                  "time": "1:43.223"
                },
                .
                .
              ]
            .
            .
          ]
        }
      ]
    }
  }
}
```

**You can see more examples at [Ergast Developer API](http://ergast.com/mrd/) page.**

**Readme will be expanded soon.**
