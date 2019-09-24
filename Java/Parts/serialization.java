    import java.awt.*;
    import java.awt.event.*;
    import java.io.Serializable;

    class MyApp implements ActionListener, Serializable
    {
        BigObjectThatShouldNotBeSerializedWithAButton bigOne;
        Button aButton = new Button();

        MyApp()
        {
            // Oops, now aButton has a listener with a reference
            // to bigOne!
            aButton.addActionListener(this);
        }

        public void actionPerformed(ActionEvent e)
        {
            System.out.println("Hello There");
        }
    }
 