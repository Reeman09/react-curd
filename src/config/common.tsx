let env ={
    'local': {
        'rest_url' : 'http://localhost:8000',
        'redirect_url': 'http://localhost:3000',
        'title': 'local'
    },
};
export const config = () =>{
    return env ['local'];
};