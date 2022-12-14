import React from "react";
import './imagePage.css'

function ImagePage() {
    return (
      <>
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://images.squarespace-cdn.com/content/v1/5cbdc684e5f7d17ea0a720ee/1556672429981-2H65MEL6LRX7M1JHZDQZ/banner%2BMadrid.jpg?format=2500w" class="d-block w-100" alt="..." />
                <div class="carousel-caption-personalizado d-none d-md-block">
                <h5 className="image-h5">First slide label</h5>
              </div>
            </div>
            </div>
          </div>
      </>
    );
  }
  
  export default ImagePage;