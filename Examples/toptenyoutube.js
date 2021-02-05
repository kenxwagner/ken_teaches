class TopTenYoutube extends React.Component {
  render() {
    return (
      <div className="TopTenYoutube-list">
        <h1>Top Ten Youtube List for {this.props.name}</h1>
        <ul>
			<li>	Despacito	</li>
			<li>	Shape of You	</li>
			<li>	See You Again	</li>
			<li>	Masha and the Bear – Recipe for Disaster	</li>
			<li>	Uptown Funk	</li>
			<li>	Gangnam Style	</li>
			<li>	Sorry	</li>
			<li>	Sugar	</li>
			<li>	Baby Shark Dance	</li>
			<li>	Roar	</li>
			<li>	The Rest of The Songs	</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <TopTenYoutube name="Shake It Off" />


