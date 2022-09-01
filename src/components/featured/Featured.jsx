import './featured.css'

const Featured = () => {
  return (
    <div className="featured">
        <div className="featured-item">
            <img src="https://cf.bstatic.com/xdata/images/city/540x270/685748.webp?k=49456a1d6dc4ab0633b32be0cbf15d3814e3b6be39ce5d63d3bd423a0229849b&o=" alt="" className="featured-image" />
            <div className="featured-titles">
                <h1>La Union</h1>
                <h2>253</h2>
            </div>
        </div>
        <div className="featured-item">
            <img src="https://cf.bstatic.com/xdata/images/city/540x270/685726.webp?k=25b602b90c38b13fe9e858b62a9bbd3c773bf459b16e84b26642a8a056c9f524&o=" className="featured-image"/>
            <div className="featured-titles">
                <h1>Antique</h1>
                <h2>143</h2>
            </div>
        </div>
        <div className="featured-item">
            <img src="https://cf.bstatic.com/xdata/images/city/540x270/685683.webp?k=33499c8d1da42751a03bf634f186073fe11c4315c7d7db78701b946653d9b53c&o=" alt="" className="featured-image" />
            <div className="featured-titles">
                <h1>Davao</h1>
                <h2>245</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured