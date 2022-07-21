const result = document.querySelector('.result');

const fetchData = async () => {
  try {
    const { data } = await axios.get('/api/2-basic-api');
    // result.textContent = data;
    // console.log(data);

    const products = data
      .map((product) => {
        const {
          image: { url },
          name,
          price,
        } = product;

        return `<article class="product">
      <img
        src="${url}"
        alt="${name}"
      />
      <div class="info">
        <h5>${name}</h5>
        <h5 class="price">$${price}</h5>
      </div>
    </article>`;
      })
      .join('');

    console.log(products);

    result.innerHTML = products;
  } catch (error) {
    console.log(error.response.data);
    result.textContent = error.response.data;
  }
};

fetchData();
