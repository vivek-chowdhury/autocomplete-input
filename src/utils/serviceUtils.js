export const handleResponse = async (response) => {
    if(response.ok) return response.json();
    if(response.status === 401) {
        const error = await response.text();
        throw new Error(error);
    }
    throw new Error('Network is not responding !');
}

export const handleFailure = (error) => {
    console.error('Request failed : ', error);
    throw error;
}