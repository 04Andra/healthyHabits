export async function fetchDataGetExercise() {

    const muscle = 'biceps'

    const responseJson = await fetch(
        'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
        {
            method: "GET",
            headers: {
                'X-RapidAPI-Key': 'c855a07cbbmsh347e6ec164ba826p152f08jsn2cac791674b8',
                'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
            }
        });

    return await responseJson.json();
}