const modalFunc = () => {
	const modal = document.querySelector('.cart-modal__overlay')
const cartBtn = document.querySelector('#cart-button')
const closeBtn = document.querySelector('.cart-modal__header--close')

const openModal = () => {
	modal.classList.add('open')
}

const closeModal = () => {
	modal.classList.remove('open')
}

cartBtn.addEventListener('click', function() {
	openModal()
})

modal.addEventListener('click', (event) => {
	console.log(event.target)
	if (
		event.target.classList.contains('cart-modal__overlay') || 
		event.target.closest('.cart-modal__header--close')
	) {
		closeModal()
	}
	})
}

const restsFunc = () => {
	const container = document.querySelector('#rests-container')
	
	const restArray = [
		{
			id: 0,
			title: 'Пицца плюс',
			time: '50',
			raiting: '4.5',
			price: '900',
			type: 'Пицца',
			image: 'pizza-plus.jpg',
		},
		{
			id: 1,
			title: 'Тануки',
			time: '50',
			raiting: '4.5',
			price: '900',
			type: 'Пицца',
			image: 'tanuki.jpg',
		},
		{
			id: 2,
			title: 'FoodBand',
			time: '50',
			raiting: '4.5',
			price: '900',
			type: 'Пицца',
			image: 'food-band.jpg',
		},
		{
			id: 3,
			title: 'Жадина-пицца',
			time: '50',
			raiting: '4.5',
			price: '900',
			type: 'Пицца',
			image: 'greedy-pizza.jpg',
		},
		{
			id: 4,
			title: 'Точка еды',
			time: '50',
			raiting: '4.5',
			price: '900',
			type: 'Пицца',
			image: 'food-point.jpg',
		},
		{
			id: 5,
			title: 'PizzaBurger',
			time: '50',
			raiting: '4.5',
			price: '900',
			type: 'Пицца',
			image: 'pizza-burger.jpg',
		}
	]

	const randerRests = (array) => {
		container.innerHTML = ''

		array.forEach((card) => {
			container.insertAdjacentHTML('beforeend', `
							<a href="goods.html?id=${card.id}" class="products-card">
								<div class="products-card_image">
									<img src="./images/rests/${card.image}" alt="${card.image}">
								</div>
								<div class="products-card_description">
									<div class="products-card_description-row">
										<h4 class="products-card_description--title">${card.title}</h4>
										<div class="products-card_description--badge">${card.time} мин</div>
									</div>
									<div class="products-card_description-row">
										<div class="products-card_description-info">
											<div class="products-card_description-info--raiting">
												<img src="./images/icons/star.svg" alt="star">
												${card.raiting}
											</div>
											<div class="products-card_description-info--price">
												От ${card.price} ₽
											</div>
											<div class="products-card_description-info--group">
												${card.type}
											</div>
										</div>
									</div>
								</div>
							</a>
				`)
		})
	}

	const loading = () => {
		container.innerHTML = '<p style="width: 100%; text-align: center">Загрузка...</>'
	}

	if (container) {
		loading()

	setTimeout(() => {
		randerRests(restArray)
	}, 1000)
	}
}

const goodsFunc = () => {
	const container = document.querySelector('#goods-container')
	
	const goodArray = [
		{
			id: 01,
			title: 'Ролл угорь стандарт',
			description: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
			price: '250',
			image: 'good-1.png',
		},
		{
			id: 11,
			title: 'Калифорния лосось стандарт',
			description: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
			price: '250',
			image: 'good-2.png',
		},
		{
			id: 2,
			title: 'Окинава стандарт',
			description: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
			price: '250',
			image: 'good-3.png',
		},
		{
			id: 3,
			title: 'Цезарь маки хl',
			description: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
			price: '250',
			image: 'good-4.png',
		},
		{
			id: 4,
			title: 'Ясай маки стандарт 185 г',
			description: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
			price: '250',
			image: 'good-5.png',
		},
		{
			id: 5,
			title: 'Ролл с креветкой стандарт',
			description: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
			price: '250',
			image: 'good-6.png',
		}
	]

	const randerGoods = (array) => {
		container.innerHTML = ''

		array.forEach((card) => {
			container.insertAdjacentHTML('beforeend', `
							<div class="products-card">
								<div class="products-card_image">
									<img src="./images/goods/${card.image}" alt="${card.image}">
								</div>
								<div class="products-card_description">
									<div class="products-card_description-row">
										<h5 class="products-card_description--name">
											${card.title}
										</h5>
									</div>
									<div class="products-card_description-row">
										<p class="products-card_description--text">
											${card.description}
										</p>
									</div>
									<div class="products-card_description-row">
										<div class="products-card_description-controls">
											<button class="btn btn-primary">
												В корзину
												<img src="./images/icons/shopping-cart-light.svg" alt="shopping cart">
											</button>
											<span class="products-card_description--price">
												${card.price} ₽
											</span>
										</div>
									</div>
								</div>
							</div>
				`)
		})
	}

	const loading = () => {
		container.innerHTML = '<p style="width: 100%; text-align: center">Загрузка...</>'
	}

	if (container) {
		loading()

	setTimeout(() => {
		randerGoods(goodArray)
	}, 1000)
	}
}

modalFunc()
restsFunc()
goodsFunc()