import profile_reducer, {addNewPost, deletePost} from "./profile_reducer";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 122},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'blabla', likesCount: 11},
        {id: 4, message: 'dada', likesCount: 11}]
}

test('length post should be increment', () => {
    //1 test data
    let action = addNewPost('it-kamasutra.com')

    //2 action
    let newState = profile_reducer(initialState,action)

    //3 expectation
    expect (newState.posts.length).toBe(5)
});
test('after deleting length should decrement', () => {
    //1 test data
    let action = deletePost(1)

    //2 action
    let newState = profile_reducer(initialState,action)

    //3 expectation
    expect (newState.posts.length).toBe(3)
});
test('after deleting invalid id posts length shouldn\'t be changed', () => {
    //1 test data
    let action = deletePost(1000)

    //2 action
    let newState = profile_reducer(initialState,action)

    //3 expectation
    expect (newState.posts.length).toBe(4)
});



