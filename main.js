console.log("Development: ", "Hi")
let actualData = JSON.parse(`{"listings":[{"isOpen":"yes","isDiscountAvailable":"yes","phone":"+34 931 98 40 67","title":"Majesstic Architectures","featuredImage":"https://wilcity.com/wp-content/uploads/2018/05/wct045-1200x900.jpg","average":4.2,"mode":5,"quality":"Average","ID":1958,"views":1958,"logo":"https://wilcity.com/wp-content/uploads/2018/08/Barcelona_3_logo_.jpg","category":"Architectural Buildings","permalink":"https://wilcity.com/listing/dahra-beauty-spa-silom/","isAds":"no","isClaimed":"no","coupon":[],"postType":"listing","group":"listing","menuOrder":62},{"isOpen":"no","isDiscountAvailable":"yes","phone":"+84 24 3939 2222","title":"Home Pure Restaurant","featuredImage":"https://wilcity.com/wp-content/uploads/2018/05/wct046-1200x803.jpg","average":3.85,"mode":5,"quality":"Poor","ID":1983,"views":1983,"logo":"https://wilcity.com/wp-content/uploads/2018/08/Hanoi_2_logo_.jpg","category":"Restaurants in Hanoi","permalink":"https://wilcity.com/listing/home-vietnamese-restaurant/","isAds":"no","isClaimed":"no","coupon":[],"postType":"listing","group":"listing","menuOrder":61},{"isOpen":"no","isDiscountAvailable":"yes","phone":"+66 95 551 8400","title":"Indulge Fusion Food &amp; Cocktail Bar","featuredImage":"https://wilcity.com/wp-content/uploads/2018/05/wct047-1200x704.jpg","average":4.5,"mode":5,"quality":"Very Good","ID":1980,"views":1980,"logo":"https://wilcity.com/wp-content/uploads/2018/05/Bangkok_2_logo.jpg","category":"Restaurants in Bangkok","permalink":"https://wilcity.com/listing/indulge-fusion-food-cocktail-bar/","isAds":"no","isClaimed":"no","coupon":[],"postType":"listing","group":"listing","menuOrder":60},{"isOpen":"yes","isDiscountAvailable":"yes","phone":"+82 2-790-3421","headerCard":[{"type":"favorite","iconType":"love","isMyFavorite":"no"}],"bodyCard":[{"type":"phone","icon":"fa fa-phone","key":"phone","value":"+82 2-790-3421"}],"title":"Chorok Baguni","featuredImage":"https://wilcity.com/wp-content/uploads/2018/05/wct048-1200x908.jpg","average":4,"mode":5,"quality":"Average","ID":1989,"views":1989,"logo":"https://wilcity.com/wp-content/uploads/2018/05/Seoul_1_logo.jpg","category":"Restaurants in Seoul","permalink":"https://wilcity.com/listing/chorok-baguni/","isAds":"no","isClaimed":"no","coupon":[],"postType":"listing","group":"listing","menuOrder":59},{"isOpen":"yes","isDiscountAvailable":"yes","phone":"+66 2 235 4811","title":"Dahra Beauty &amp; Spa","featuredImage":"https://wilcity.com/wp-content/uploads/2018/05/wct049-1200x801.jpg","average":3.95,"mode":5,"quality":"Poor","ID":2005,"views":2005,"logo":"https://wilcity.com/wp-content/uploads/2018/08/Bangkok_2_logo_.jpg","category":"Spas & Wellness in Bangkok","permalink":"https://wilcity.com/listing/dahra-beauty-spa-silom/","isAds":"no","isClaimed":"no","coupon":[],"postType":"listing","group":"listing","menuOrder":56},{"isOpen":"yes","isDiscountAvailable":"yes","phone":"+34 936 25 35 33","title":"Restaurante Bivio","featuredImage":"https://wilcity.com/wp-content/uploads/2018/05/wct050-1200x797.jpg","average":3.85,"mode":5,"quality":"Poor","ID":2015,"views":2015,"logo":"https://wilcity.com/wp-content/uploads/2018/08/Barcelona_4_logo_.jpg","category":"Restaurants in Barcelona","permalink":"https://wilcity.com/listing/restaurante-bivio/","isAds":"no","isClaimed":"no","coupon":[],"postType":"listing","group":"listing","menuOrder":55},{"isOpen":"yes","isDiscountAvailable":"no","phone":"+1 415-861-1313","title":"Sightglass Coffee","featuredImage":"https://wilcity.com/wp-content/uploads/2018/05/wct051-1200x800.jpg","average":3.45,"mode":5,"quality":"Poor","ID":1782,"views":1782,"logo":"https://wilcity.com/wp-content/uploads/2018/08/San_Jose_2_logo_.jpg","category":"You're in good company. Shop our blends and single orgin offerings, and embrace those warm and fuzzy feelings.","permalink":"https://wilcity.com/listing/sightglass-coffee/","isAds":"no","isClaimed":"no","coupon":[],"postType":"listing","group":"listing","menuOrder":54},{"isOpen":"yes","isDiscountAvailable":"no","phone":"+1 408-294-1125","title":"Bill's Cafe","featuredImage":"https://wilcity.com/wp-content/uploads/2018/05/wct052-1200x802.jpg","average":3.55,"mode":5,"quality":"Poor","ID":1793,"views":1793,"logo":"https://wilcity.com/wp-content/uploads/2018/08/San_Francisco_3_logo_.jpg","category":"Welcome to Bill's Cafe, a breakfast tradition since 1977.","permalink":"https://wilcity.com/listing/bills-cafe/","isAds":"no","isClaimed":"no","coupon":[],"postType":"listing","group":"listing","menuOrder":53},{"isOpen":"yes","isDiscountAvailable":"no","phone":"(408) 268-3883","title":"Almaden Quicksilver County Park","featuredImage":"https://wilcity.com/wp-content/uploads/2018/05/wct053-1200x800.jpg","average":3.2,"mode":5,"quality":"Poor","ID":1798,"views":1798,"logo":"https://wilcity.com/wp-content/uploads/2018/08/San_Francisco_1_logo_.jpg","category":"Welcome to all 28 wild and wonderful parks of Santa Clara County!","permalink":"https://wilcity.com/listing/almaden-quicksilver-county-park/","isAds":"no","isClaimed":"no","coupon":[],"postType":"listing","group":"listing","menuOrder":52},{"isOpen":"yes","isDiscountAvailable":"no","phone":"+1 702-770-3535","title":"Drugstore Cafe","featuredImage":"https://wilcity.com/wp-content/uploads/2018/05/wct054-1200x800.jpg","average":3.2,"mode":5,"quality":"Poor","ID":1802,"views":1802,"logo":"https://wilcity.com/wp-content/uploads/2018/08/Las_Vegas_1_logo_.jpg","category":"Las Vegas Casual Dining Restaurants","permalink":"https://wilcity.com/listing/drugstore-cafe/","isAds":"no","isClaimed":"no","coupon":[],"postType":"listing","group":"listing","menuOrder":51},{"isOpen":"yes","isDiscountAvailable":"no","phone":"+66 2 235 4811","title":"Dahra Beauty &amp; Spa","featuredImage":"https://wilcity.com/wp-content/uploads/2018/05/wct049-1200x801.jpg","average":3.95,"mode":4,"quality":"Poor","ID":1992,"views":1992,"logo":"https://wilcity.com/wp-content/uploads/2018/08/Bangkok_2_logo_.jpg","category":"Spas & Wellness in Bangkok","permalink":"https://wilcity.com/listing/dahra-beauty-spa-silom/","isAds":"no","isClaimed":"no","coupon":[],"postType":"listing","group":"listing","menuOrder":192},{"isOpen":"yes","isDiscountAvailable":"no","phone":"+66 2 235 4811","title":"Dahra Beauty &amp; Spa","featuredImage":"https://wilcity.com/wp-content/uploads/2018/05/wct049-1200x801.jpg","average":3.95,"mode":5,"quality":"Poor","ID":1991,"views":1991,"logo":"https://wilcity.com/wp-content/uploads/2018/08/Bangkok_2_logo_.jpg","category":"Spas & Wellness in Bangkok","permalink":"https://wilcity.com/listing/dahra-beauty-spa-silom/","isAds":"no","isClaimed":"no","coupon":[],"postType":"listing","group":"listing","menuOrder":191},{"isOpen":"yes","isDiscountAvailable":"no","phone":"+66 2 235 4811","title":"Dahra Beauty &amp; Spa","featuredImage":"https://wilcity.com/wp-content/uploads/2018/05/wct049-1200x801.jpg","average":3.95,"mode":5,"quality":"Poor","ID":1990,"views":1990,"logo":"https://wilcity.com/wp-content/uploads/2018/08/Bangkok_2_logo_.jpg","category":"Spas & Wellness in Bangkok","permalink":"https://wilcity.com/listing/dahra-beauty-spa-silom/","isAds":"no","isClaimed":"no","coupon":[],"postType":"listing","group":"listing","menuOrder":190}],"maxPosts":13,"maxPages":2}`)
console.log("Development: ", actualData)
let totalItems = actualData.listings.length
console.log("Development: ", actualData)
let ratingSelected = false, mostViewSelected = false, openNowSelected = false, discountSelected = false;
let displayData = [], currentPage = 1;
function resetData() {
    displayData = actualData.listings;
    totalItems = displayData.length
    document.getElementById("totalItems").innerText = totalItems
    openNowSelected = false
    discountSelected = false
    ratingSelected = false
    discountSelected = false
    document.getElementById("mostView").classList.remove("wil-btn--primary")
    document.getElementById("rating").classList.remove("wil-btn--primary")
    document.getElementById("openNow").classList.remove("wil-btn--primary")
    document.getElementById("discount").classList.remove("wil-btn--primary")
    navigatePage(1);
}
function selectMostViewed() {
    mostViewSelected = !mostViewSelected
    if (mostViewSelected) {
        let tempArr = displayData
        if (ratingSelected) {
            tempArr.sort(function (a, b) {
                return b.views - a.views;
            });
            console.log("Development: ", tempArr)
            document.getElementById("mostView").classList.add("wil-btn--primary")
            document.getElementById("rating").classList.remove("wil-btn--primary")
            document.getElementById("openNow").classList.remove("wil-btn--primary")
            document.getElementById("discount").classList.remove("wil-btn--primary")
            discountSelected = false
            openNowSelected = false
            ratingSelected = false
        } else {
            document.getElementById("mostView").classList.remove("wil-btn--primary")
            resetData()
        }
    }
    function selectRating() {
        ratingSelected = !ratingSelected
        let tempArr = displayData
        if (ratingSelected) {
            tempArr.sort(function (a, b) {
                return b.average - a.average;
            });
            console.log("Development: ", tempArr)
            document.getElementById("rating").classList.add("wil-btn--primary")
            document.getElementById("mostView").classList.remove("wil-btn--primary")
            document.getElementById("openNow").classList.remove("wil-btn--primary")
            document.getElementById("discount").classList.remove("wil-btn--primary")
            discountSelected = false
            openNowSelected = false
            mostViewSelected = false
        } else {
            document.getElementById("rating").classList.remove("wil-btn--primary")
            resetData()
        }
    }
    function selectDiscount() {
        discountSelected = !discountSelected
        let arr = displayData
        if (discountSelected) {
            let tempArr = []
            for (let i = 0; i < arr.length; i++) {
                if (arr[i]['isDiscountAvailable'] == "yes")
                    tempArr.push(arr[i])
            }
            totalItems = tempArr.length
            document.getElementById("totalItems").innerText = totalItems
            document.getElementById("discount").classList.add("wil-btn--primary")
            document.getElementById("openNow").classList.remove("wil-btn--primary")
            document.getElementById("rating").classList.remove("wil-btn--primary")
            document.getElementById("mostView").classList.remove("wil-btn--primary")
            ratingSelected = false
            mostViewSelected = false
            openNowSelected = false
        } else {
            document.getElementById("discount").classList.remove("wil-btn--primary")
            resetData()
        }
    }
    function selectOpenNow() {
        openNowSelected = !openNowSelected
        let arr = displayData
        if (openNowSelected) {
            let tempArr = []
            for (let i = 0; i < arr.length; i++) {
                if (arr[i]['isOpen'] == "yes")
                    tempArr.push(arr[i])
            }
            totalItems = tempArr.length
            document.getElementById("totalItems").innerText = totalItems
            document.getElementById("openNow").classList.add("wil-btn--primary")
            document.getElementById("discount").classList.remove("wil-btn--primary")
            document.getElementById("rating").classList.remove("wil-btn--primary")
            document.getElementById("mostView").classList.remove("wil-btn--primary")
            discountSelected = false
            ratingSelected = false
            mostViewSelected = false
        } else {
            document.getElementById("openNow").classList.remove("wil-btn--primary")
            resetData()
        }
    }
    function searchItem() {
        resetData();
        let arr = displayData;
        let tempArr = []
        let str = document.getElementById("searchQuery").value.toString().toLowerCase()
        for (let i = 0; i < arr.length; i++) {
            var title = arr[i].title.toString().toLowerCase()
            var address = arr[i].oAddress.address.toString().toLowerCase()
            if (title.includes(str) || address.includes(str))
                tempArr.push(arr[i])
        }
        totalItems = tempArr.length
        document.getElementById("totalItems").innerText = totalItems
    }
    function navigatePage(pageNo) {
        currentPage = pageNo
        if (pageNo == 1) {
            document.getElementById("page1").classList.add("current")
            document.getElementById("page2").classList.remove("current")
            document.getElementById("pagePrev").style["display"] = "none"
            document.getElementById("pageNext").style["display"] = ""
        } else if (pageNo == 2) {
            document.getElementById("page2").classList.add("current")
            document.getElementById("page1").classList.remove("current")
            document.getElementById("pagePrev").style["display"] = ""
            document.getElementById("pageNext").style["display"] = "none"
        }
        let tempArr = displayData
        tempArr = tempArr.slice((pageNo - 1) * 10, (pageNo) * 10)
        console.log("Development: ", tempArr)
    }