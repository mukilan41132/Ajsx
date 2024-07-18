const loadCommentsBtnElements = document.getElementById('loadcomments');
const commetsSectionElements = document.getElementById('comments')
function createCommentsList(comments) {
    const commentsListElements = document.createElement('ol');
    for (const comment of comments) {
        const commentelements = document.createElement('li');
        commentelements.innerHTML = `
        <article class="comment-item">
        <h2>${comment.title}</h2>
        <p>${comment.text}</p>
        </article>
        `;
        commentsListElements.appendChild(commentelements);

    }
    return commentsListElements;

}

const fetchcommentsfrompost = async () => {
    const postID = loadCommentsBtnElements.dataset.postid;
    const responce = await fetch(`/posts/${postID}/comments`);
    const resdata = await responce.json();
    const commentElements = createCommentsList(resdata);
    commetsSectionElements.innerHTML = '';
    commetsSectionElements.appendChild(commentElements);


}
loadCommentsBtnElements.addEventListener('click', fetchcommentsfrompost);