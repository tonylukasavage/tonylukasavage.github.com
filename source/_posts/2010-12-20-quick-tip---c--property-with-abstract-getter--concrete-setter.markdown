---
layout: post
title: "Quick Tip - C# property with abstract getter, concrete setter"
date: 2010-12-20 21:09
comments: false
categories: [archive, csharp, programming, oop, .net, quick tip]
published: true
---

## The Problem
On a recent .NET project I was defining an abstract class in C# when I came upon a unusual case: I needed a property that had an abstract getter, but a concrete setter.  In other words, the getter needed to be implemented by all derived classes and the setter does not, in fact its defined in the abstract class.  Nothing I like more than a good object oriented programming quandry.

Here's some code to help make sense of it:

``` csharp
public abstract class BaseClass
{
    private string _baseValue;
    public abstract string Value
    {
        get;
        // the "set" will cause a compile error.  You can't define the get or set inside
        // of an abstract property.
        set
        {
            _baseValue = value;
        }
    }
}
```

## The Solution
While the above syntax will generate a compile time error, there is a fairly simple way to work around the issue.  Check out this code:

``` csharp
public abstract class BaseClass
{
    private string _baseValue;
    protected abstract string ValueGet();
    protected void ValueSet(string baseValue)
    {
        _baseValue = baseValue;
    }

    public abstract string Value
    {
        get
        {
            // as implemented by the derived class
            return this.ValueGet();
        }
        set
        {
            // as implemented by BaseClass, or derived class override
            this.ValueSet(value);
        }
    }
}
```

Here we delegated the setting and getting of the property to separate protected methods within BaseClass.  Now that 2 methods are used we can assign whether or not they are abstract separately.  The getter must be implemented by the derived classes, the setter may or may not be.

And that's it.  Obviously this code also works vice versa, with the setter being abstract and the getter being concrete.  It's nice because from the perspective of someone using your code, <span style="color:#ff0000;">nothing changes with regards to the public Value property</span>.  The use of protected methods to defer overriding and abstraction help you avoid writing any unnecessarily redundant code in your derived classes. It's a nice little trick to have in your pocket.

Happy C# OOP'ing!