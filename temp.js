const MeinToolbar = ({
	logoName
}) => (
	<Toolbar>
		<NavItem is="a">
			{logoName}
		</NavItem>
		<NavItem is="a">
			NavItem
		</NavItem>
		<Space
			auto={true}
			x={1}
		/>
		<NavItem is="a">
			NavItem
		</NavItem>
	</Toolbar>
)

var App = React.createClass({
  render: function() {
    return (
    	<div>
				<MeinToolbar logoName='sdrl.ch' />
	  		<Box p={3}>
	        <Flex align='center'>
	          <Box px={2} auto>Box A</Box>
	          <Box px={2} auto>Box B</Box>
	          <Box px={2} auto>
	          	<Button
	          	  backgroundColor="warning"
	          	  color="white"
	          	  inverted={true}
	          	  rounded={true}
	          	>
	          	  Button
	          	</Button>
	          </Box>
	        </Flex>
	      </Box>
			</div>
	    )
  }
})