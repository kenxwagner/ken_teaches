public class BST
{
    private BSTNode root;

    public void put( String key, Object value )
    {
        if ( root == null )
        {
            root = new BSTNode( key, value );
        }
        else
        {
            root.put( key, value );
        }
    }

    public Object get( String key )
    {
        return root == null ? null : root.get( key );
    }
}