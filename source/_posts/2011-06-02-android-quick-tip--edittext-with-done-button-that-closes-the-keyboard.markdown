---
layout: post
title: "Android Quick Tip: EditText with DONE Button That Closes the Keyboard"
date: 2011-06-02 09:17
comments: false
categories: [archive, android, mobile, java]
published: true
---

## Android Quick Tip
Close the keyboard when you click 'DONE'... seems like a simple task, right? Unfortunately, clicking 'DONE' or the 'RETURN' button in even a single line Android EditText will not drop focus and close the soft keyboard.  In most cases it will just generate a new line of text.  So what do you have to do if you want to close the soft keyboard by clicking 'DONE'?

First you need to set the <strong>android:imeOptions</strong> attribute equal to <strong>"actionDone"</strong> for your target EditText as seen below.  That will change your 'RETURN' button in your EditText's soft keyboard to a 'DONE' button.

<span style="font-weight:bold; font-size:125%;">* example_edittext.xml</span><br>

``` xml
<EditText
    android:id="@+id/edittext_done"
    android:layout_width="fill_parent"
    android:layout_height="wrap_content"
    android:hint="Enter some text"
    android:imeOptions="actionDone"
    />
```

Now we need to create a custom <a href="http://developer.android.com/reference/android/widget/TextView.OnEditorActionListener.html" target="_blank">OnEditorActionListener</a> for the target EditText that will recognize when the 'DONE' button has been clicked.  In it we override the <a href="http://developer.android.com/reference/android/widget/TextView.html#onEditorAction(int)" target="_blank">onEditorAction()</a> method, get an instance of the <a href="http://developer.android.com/reference/android/view/inputmethod/InputMethodManager.html" target="_blank">InputMethodManager</a>, and use it to close the soft keyboard.  Here's the code for the custom OnEditorActionListener class:

<span style="font-weight:bold; font-size:125%;">* DoneOnEditorActionListener.java</span><br>

``` java
class DoneOnEditorActionListener implements OnEditorActionListener {
    @Override
    public boolean onEditorAction(TextView v, int actionId, KeyEvent event) {
        if (actionId == EditorInfo.IME_ACTION_DONE) {
            InputMethodManager imm = (InputMethodManager)v.getContext().getSystemService(Context.INPUT_METHOD_SERVICE);
            imm.hideSoftInputFromWindow(v.getWindowToken(), 0);
            return true;
        }
        return false;
    }
}
```

Now go to the onCreate() method of the Activity that contains the target EditText.  We'll call it <strong>SampleActivity</strong> here.  In here you will assign the new <strong>DoneOnEditorActionListener</strong> to the target EditText via the <a href="http://developer.android.com/reference/android/widget/TextView.html#setOnEditorActionListener(android.widget.TextView.OnEditorActionListener)" target="_blank">setOnEditorActionListener()</a> method.

<span style="font-weight:bold; font-size:125%;">* SampleActivity.java</span><br>

``` java
public class SampleActivity extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.sample_activity_layout); // sample_activity_layout contains our target EditText, target_edittext

        EditText targetEditText = (EditText)findViewById(R.id.target_edittext);
        targetEditText.setOnEditorActionListener(new DoneOnEditorActionListener());

        // The rest of the onCreate() code
   }
}
```

And there you go, your target EditText field will now close the soft keyboard whenever you click the 'DONE' button.  Very handy and not too difficult.  Enjoy.